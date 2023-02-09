export interface IRegisterType {
  first_name: string;
  last_name: string;
  email: String;
  password: number | string;
}

export interface ILoginType {
  email: string;
  password: string | number;
}

export enum UserRoleTypes {
  Chef = "chef",
  User = "user",
}

export enum ResetPasswordTypes {
  ResetPassword = "reset-password",
  SuccessResetPassword = "success-reset-password",
}
