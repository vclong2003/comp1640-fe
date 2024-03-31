export enum EEventSort {
  DATE = "start_date",
  NUMBER_OF_CONTRIBUTIONS = "number_of_contributions",
}

export interface IEvent {
  _id: string;
  name: string;
  description?: string;
  banner_image_url?: string;
  start_date: string;
  first_closure_date: string;
  final_closure_date: string;
  is_accepting_new_contribution: boolean;
  is_contributions_editable: boolean;
  number_of_contributions: number;
  faculty: {
    _id: string;
    name: string;
    mc?: {
      _id: string;
      name: string;
      email: string;
    };
  };
}

export interface IEventState {
  events: IEvent[];
}

// Create event ---------------------------
export interface ICreatEventPayload {
  name: string;
  description: string;
  start_date: string;
  first_closure_date: string;
  final_closure_date: string;
  facultyId: string;
  bannerImage: File;
}

// Update event ---------------------------
export interface IUpdateEventPayload {
  _id: string;
  name?: string;
  description?: string;
  start_date?: string;
  first_closure_date?: string;
  final_closure_date?: string;
  bannerImage?: File;
}

// Find event by id ---------------------------
export interface IFindEventByIdPayload {
  _id: string;
}

// Delete event ---------------------------
export interface IDeleteEventPayload {
  _id: string;
}

// Find events ---------------------------
export interface IFindEventsPayload {
  name?: string;
  facultyId?: string;
  start_date?: string;
  final_closure_date?: string;
  mcName?: string;
  sort?: EEventSort;
  skip?: number;
  limit?: number;
}
