import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useAuth } from "../../contexts/auth.context";
import { styles } from "./header.styles";
import type { THeader } from "./header.types";

const Header = ({ title, navigation }: THeader) => {
  const { user, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.subject}>
        <Icon
          size={20}
          color="#fff"
          name="arrow-back-ios-new"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text}>{user?.name}</Text>
        <Icon name="exit-to-app" size={20} color="#fff" onPress={signOut} />
      </View>
      <View style={styles.title}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;
