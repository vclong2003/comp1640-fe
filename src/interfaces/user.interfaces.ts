export enum ERole {
  Guest = "guest",
  Student = "student",
  MarketingManager = "mm",
  MarketingCoordinator = "mc",
  Admin = "admin",
}

export enum EGender {
  Male = "male",
  Female = "female",
  Other = "other",
}
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

export interface IGuestRegisterPayload {
  email: string;
  facultyId: string;
}

export interface ISetupAccountPayload {
  token: string;
  password: string;
  name: string;
  phone: string;
  dob: Date | string;
  gender: EGender;
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
