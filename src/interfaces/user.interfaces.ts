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
  dob?: string;
  faculty?: {
    _id: string;
    name: string;
  };
  gender: EGender;
  role: ERole;
}
export interface ILoginSession {
  _id: string;
  browser: string;
  date: string;
  isCurrentDevice: boolean;
}

export interface IUserState {
  user: IUser | null;
  users: IUser[];
  loginSessions: ILoginSession[];
}

// Login ---------------------------------------
export interface ILoginPayload {
  email: string;
  password: string;
}

// Guest register -------------------------------
export interface IGuestRegisterPayload {
  email: string;
  facultyId: string;
}
export interface IVerifyRegisterTokenPayload {
  token: string;
}
export interface IVerifyRegisterTokenResponse {
  email: string;
}

// Setup account -------------------------------
export interface ISetupAccountPayload {
  token: string;
  password: string;
  name: string;
  phone: string;
  dob: string;
  gender: EGender;
}

// Reset password -----------------------------
export interface IResetPasswordPayload {
  token: string;
  password: string;
}

// Change password -----------------------------
export interface IChangePasswordPayload {
  oldPassword: string;
  newPassword: string;
}

// Login Session --------------------------------
export interface IFindLoginSessionsPayload {
  skip?: number;
  limit?: number;
}
export interface IRemoveLoginSessionPayload {
  sessionId: string;
}

// Update User ----------------------------------
export interface IUpdateUserPayload {
  phone?: string;
  name?: string;
  dob?: string;
  gender?: EGender;
  avatar?: File;
}
// Find users --------------------------------
export interface IFindUsersPayload {
  name?: string;
  role: ERole;
  email?: string;
  facultyId?: string;
  skip?: number;
  limit?: number;
}
