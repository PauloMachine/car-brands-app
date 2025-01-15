import type { RouteProp } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type TNavigation = {
  SignIn: undefined;
  Home: undefined;
  Models: { brandCode: string };
};

export type TScreenOptions = NativeStackScreenProps<
  TNavigation,
  keyof TNavigation
>;

export type TSignInScreenProp = NativeStackScreenProps<TNavigation, "SignIn">;
export type THomeScreenProp = NativeStackScreenProps<TNavigation, "Home">;
export type TModelsScreenProp = NativeStackScreenProps<TNavigation, "Models">;
export type TModelScreenRouteProp = RouteProp<TNavigation, "Models">;
