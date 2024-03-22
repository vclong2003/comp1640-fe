import { EGender, ERole } from "../variables/user.variables";

export interface IUser {
  _id: string;
  email: string;
  name: string;
  avatar_url?: string;
  phone?: string;
  dob?: Date;
  faculty?: {
    _id: string;
    name: string;
  };
  gender: EGender;
  role: ERole;
}

export interface IUserState {
  user: IUser | null;
  users: IUser[];
  loading: boolean;
  error: string | null;
}
