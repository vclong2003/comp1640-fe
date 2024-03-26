export enum EEventSort {
  DATE = "start_date",
  NUMBER_OF_CONTRIBUTIONS = "number_of_contributions",
}

export interface IEvent {
  _id: string;
  name: string;
  description: string;
  banner_image_url: string;
  start_date: Date;
  first_closure_date: Date;
  final_closure_date: Date;
  is_accepting_new_contribution: boolean;
  is_contributions_editable: boolean;
  number_of_contributions: number;
  faculty: {
    _id: string;
    name: string;
    mc: {
      _id: string;
      name: string;
      email: string;
    };
  };
}

export interface ICreatEventPayload {
  name: string;
  description: string;
  start_date: Date;
  first_closure_date: Date;
  final_closure_date: Date;
  facultyId: string;
  bannerImage: File;
}

export interface IUpdateEventPayload {
  name?: string;
  description?: string;
  start_date?: Date;
  first_closure_date?: Date;
  final_closure_date?: Date;
  bannerImage?: File;
}

export interface IFindEventsPayload {
  name?: string;
  facultyId?: string;
  start_date?: Date;
  final_closure_date?: Date;
  mcName?: string;
  sort?: EEventSort;
  skip?: number;
  limit?: number;
}
