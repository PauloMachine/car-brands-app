import React from "react";
import Toast from "react-native-toast-message";
import { TouchableOpacity } from "react-native";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useAuth } from "../../contexts/auth.context";
import { View, Text } from "react-native";
import type { TUser } from "../../types/user.type";
import type { TSignInScreenProp } from "../../types/navigation.type";
import Input from "../../components/input";
import { styles } from "./sign-in.style";
import { showMessage } from "react-native-flash-message";

export default function SignInScreen({ navigation }: TSignInScreenProp) {
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TUser>();
  const { signIn } = useAuth();

  const onSubmit: SubmitHandler<TUser> = async (data) => {
    try {
      await signIn(data);
      navigation.navigate("Home");
      reset();
    } catch (error) {
      showMessage({
        type: "danger",
        message: "Erro!",
        description: error.message,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Car Brands</Text>
      <Controller
        name="user"
        defaultValue=""
        control={control}
        rules={{
          required: "O usuário é obrigatório",
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            label="Usuário"
            placeholder="Usuário"
            value={value}
            onChange={onChange}
            error={errors.user?.message}
          />
        )}
      />
      <Controller
        name="password"
        defaultValue=""
        control={control}
        rules={{
          required: "A senha é obrigatória",
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            label="Senha"
            placeholder="Senha"
            value={value}
            onChange={onChange}
            error={errors.password?.message}
          />
        )}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text>acessar</Text>
      </TouchableOpacity>
    </View>
  );
}
