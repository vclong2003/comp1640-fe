import { ERole } from "../enums/user.enums";

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
  error: string;
}
