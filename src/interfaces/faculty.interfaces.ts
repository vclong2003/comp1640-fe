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

// Create faculty ------------------------
export interface ICreateFacultyPayload {
  name: string;
  description: string;
  mcId?: string;
  bannerImage: File;
}

// Update faculty ------------------------
export interface IUpdateFacultyPayload {
  _id: string;
  name?: string;
  description?: string;
  mcId?: string;
  bannerImage?: File;
}

// Find faculties -------------------------
export interface IFindFacultiesPayload {
  name?: string;
  skip?: number;
  limit?: number;
}

// Find faculty by id ----------------------
export interface IFindFacultyByIdPayload {
  _id: string;
}

// Move student ----------------------------
export interface IMoveStudentPayload {
  facultyId: string;
  studentId: string;
}

// Remove student --------------------------
export interface IRemoveStudentPayload {
  facultyId: string;
  studentId: string;
}
