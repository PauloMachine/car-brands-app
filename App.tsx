import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./src/contexts/auth.context";
import Navigator from "./src/routes/navigation.route";
import { StatusBar } from "react-native";
import FlashMessage from "react-native-flash-message";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <StatusBar barStyle="light-content" backgroundColor="#fff" />
        <Navigator />
        <FlashMessage position="top" />
      </AuthProvider>
    </QueryClientProvider>
  );
}
