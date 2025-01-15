import { useMutation } from "@tanstack/react-query";
import { postSignIn } from "../services/auth.service";
import type { TUser } from "../types/user.type";
import type { TAuth } from "../types/auth.type";

export const useSignIn = () => {
  return useMutation<TAuth, Error, TUser>({
    mutationFn: (data: TUser) => postSignIn(data),
  });
};
