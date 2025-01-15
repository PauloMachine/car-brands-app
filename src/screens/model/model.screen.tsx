import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import axios from "axios";
import styled from "styled-components/native";
import { useGetModels } from "./model.hooks";
import type { TModel, TModels } from "./model.type";
import { styles } from "./model.style";

export default function ModelsScreen({ route }: TModels) {
  const { brandCode } = route.params;
  const { data: models } = useGetModels(brandCode);

  // There are bugs in some of the test models
  // returning different objects than expected
  const hasInvalidModel =
    Array.isArray(models) &&
    models.some((model) => {
      return (
        typeof model !== "object" ||
        model === null ||
        typeof model.codigo !== "number" ||
        typeof model.nome !== "string"
      );
    });

  return (
    <View style={styles.container}>
      {models.length === 0 && <Text>Sem modelos para essa marca</Text>}
      {hasInvalidModel && <Text>Os modelos dessa marca estão incorretos</Text>}
      <FlatList
        data={models}
        keyExtractor={(item: TModel) => item.codigo}
        renderItem={({ item }) => (
          <View style={styles.view}>
            <Text style={styles.text}>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
}
