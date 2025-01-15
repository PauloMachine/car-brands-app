import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/auth.context";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import type { TNavigation } from "../types/navigation.type";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated, isPending } = useAuth();
  const navigation = useNavigation<NavigationProp<TNavigation>>();

  useEffect(() => {
    if (!isPending && !isAuthenticated) {
      navigation.navigate("SignIn");
    }
  }, [isPending, isAuthenticated, navigation]);

  return <>{children}</>;
};

export default PrivateRoute;
