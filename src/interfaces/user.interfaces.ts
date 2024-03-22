import { ERole } from "../variables/user.variables";

export interface IUser {
  _id: string;
  email: string;
  name: string;
  avatar_url: string;
  role: ERole;
}

export interface IUserState {
  user: IUser | null;
  users: IUser[];
  loading: boolean;
  error: string | null;
}
