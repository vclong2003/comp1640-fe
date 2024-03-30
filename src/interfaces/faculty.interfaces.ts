export interface IFaculty {
  _id: string;
  name: string;
  description?: string;
  banner_image_url?: string;
  mc?: {
    _id: string;
    name: string;
    email: string;
  };
}

export interface IFacultyState {
  faculties: IFaculty[];
  faculty: IFaculty | null;
}

export interface ICreateFacultyPayload {
  name: string;
  description: string;
  mcId?: string;
  bannerImage: File;
}

export interface IUpdateFacultyPayload {
  name?: string;
  description?: string;
  mcId?: string;
  bannerImage?: File;
}

export interface IFindFacultiesPayload {
  name?: string;
  skip?: number;
  limit?: number;
}

export interface IAddStudentPayload {
  facultyId: string;
  studentId: string;
}
