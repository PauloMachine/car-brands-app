import React, { createContext, useState, ReactNode, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { TUser, TUserAuth } from "../types/user.type";
import { useSignIn } from "../hooks/auth.hook";

interface AuthContextData {
  user: TUserAuth | null;
  isAuthenticated: boolean;
  isPending: boolean;
  signIn: (data: TUser) => Promise<void>;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<TUserAuth | null>(null);
  const { mutateAsync: mutateSignIn, isPending } = useSignIn();

  const signIn = async (data: TUser) => {
    try {
      const { user } = await mutateSignIn(data);
      await AsyncStorage.setItem("@token", user.token);
      setUser(user);
    } catch (error) {
      setUser(null);
      throw new Error(error.response.data.message);
    }
  };

  const signOut = async () => {
    setUser(null);
    await AsyncStorage.removeItem("@token");
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, isPending, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
