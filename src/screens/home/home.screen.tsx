import React from "react";
import { FlatList, TouchableOpacity, View, Text } from "react-native";
import type { TBrand } from "./home.type";
import type { THomeScreenProp } from "../../types/navigation.type";
import { styles } from "./home.style";
import { useGetBrands } from "./home.hooks";

export default function HomeScreen({ navigation }: THomeScreenProp) {
  const { data: brands } = useGetBrands();

  return (
    <View style={styles.container}>
      <FlatList
        data={brands}
        keyExtractor={(item: TBrand) => item.codigo}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.touchable}
            onPress={() =>
              navigation.navigate("Models", { brandCode: item.codigo })
            }
          >
            <Text style={styles.text}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
