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
}

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface ISetupAccountPayload {
  token: string;
  password: string;
  name: string;
  phone: string;
  dob: Date;
}

export interface IUpdateUserPayload {
  phone?: string;
  name?: string;
  dob?: Date;
  gender?: EGender;
  avatar?: File;
}

export interface IFindUsersPayload {
  name?: string;
  role: ERole;
  email?: string;
  facultyId?: string;
  skip?: number;
  limit?: number;
}
