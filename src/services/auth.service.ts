import type { TAuth, TAuthResponse } from "../types/auth.type";
import type { TUser } from "../types/user.type";
import theCarsAuthAPI from "./the-cars-auth-api.service";

export const postSignIn = async (data: TUser): Promise<TAuth> => {
  const response = await theCarsAuthAPI.post<TAuthResponse, TAuthResponse>(
    "/signIn",
    data
  );
  return response.data;
};
