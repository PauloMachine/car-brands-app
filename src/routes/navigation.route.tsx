import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/sign-in/sign-in.screen";
import HomeScreen from "../screens/home/home.screen";
import ModelsScreen from "../screens/model/model.screen";
import Header from "../components/header";
import { TNavigation, TScreenOptions } from "../types/navigation.type";
import PrivateRoute from "./private.route";

const Stack = createNativeStackNavigator<TNavigation>();

const Navigator = () => {
  const createScreenOptions = useCallback(
    (title: string) =>
      ({ navigation }: TScreenOptions) => ({
        header: () => <Header title={title} navigation={navigation} />,
      }),
    []
  );

  const screens: {
    name: keyof TNavigation;
    private?: boolean;
    component: React.ComponentType<any>;
    options?: any;
  }[] = [
    {
      name: "SignIn",
      component: SignInScreen,
      options: { headerShown: false },
    },
    {
      name: "Home",
      component: HomeScreen,
      options: createScreenOptions("Marcas"),
      private: true,
    },
    {
      name: "Models",
      component: ModelsScreen,
      options: createScreenOptions("Modelos"),
      private: true,
    },
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        {screens.map((screen, index) => (
          <Stack.Screen key={index} name={screen.name} options={screen.options}>
            {({ navigation, route }) =>
              screen.private ? (
                <PrivateRoute>
                  <screen.component navigation={navigation} route={route} />
                </PrivateRoute>
              ) : (
                <screen.component navigation={navigation} route={route} />
              )
            }
          </Stack.Screen>
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
