// Login Credentials

export type LoginCredientals = {
  email: string;
  password: string;
};

export type RegisterCredientials = LoginCredientals & {
  username: string;
};

export type UserProfile = {
  username: string;
  email: string;
  tier: string;
};

export type Address = {
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipCode: number;
};
