import type { TUserAuth } from "./user.type";

export type TAuth = {
  error: boolean;
  user?: TUserAuth;
  message?: string;
};

export type TAuthResponse = {
  data: TAuth;
};
