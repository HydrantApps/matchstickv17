// Login Credentials

export type LoginCredientals = {
  email: string;
  password: string;
};

export type RegisterCredientials = LoginCredientals & {
  username: string;
};

export type UserProfile = {
  id?: string;
  username?: string;
  displayName?: string;
  email?: string;
  tier?: string;
  phoneNumber?: string;
  photoURL: string;
};

export type Address = {
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipCode: number;
};
