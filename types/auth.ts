export type AuthUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

export type RefreshTokenResponse = {
  success: boolean;
  accessToken: string;
  expiresIn: number;
  expiration?: number;
};

export type LoginFormValues = {
  email: string;
  password: string;
};
