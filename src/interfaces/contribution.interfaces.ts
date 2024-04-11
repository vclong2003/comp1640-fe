export interface IContribution {
  _id: string;
  title: string;
  description: string;
  banner_image_url: string;
  submitted_at: string;
  is_publication: boolean;
  is_editable: boolean;
  is_liked: boolean;
  likes: number;
  comments: number;
  private_comments: number;
  author: {
    _id: string;
    avatar_url: string;
    email: string;
    name: string;
  };
  faculty: {
    _id: string;
    name: string;
  };
  event: {
    _id: string;
    name: string;
  };
  documents: IContributionFile[];
  images: IContributionFile[];
}
export interface IContributionFile {
  file_name: string;
  file_url: string;
  file_access_url: string;
}
export interface IComment {
  _id: string;
  content: string;
  posted_at: string;
  author: {
    _id: string;
    avatar_url: string;
    name: string;
  };
}

export interface IContributionState {
  contributions: IContribution[];
  comments: IComment[];
  privateComments: IComment[];
  total: number;
  filter: IFindContributionsPayload;
}

// Add Contribution --------------------------
export interface IAddContributionPayload {
  title: string;
  description: string;
  eventId: string;
  documents: File[];
  images: File[];
  bannerImage?: File;
}
export interface IAddContributionResponse {
  _id: string;
}

// Update Contribution -----------------------
export interface IUpdateContriButionPayload {
  _id: string;
  title?: string;
  description?: string;
  documents?: File[];
  images?: File[];
  bannerImage?: File;
}

// Find Contribution by id -----------------
export interface IFindContributionByIdPayload {
  contributionId: string;
}

// Find contributions ----------------------
export interface IFindContributionsPayload {
  eventId?: string;
  facultyId?: string;
  title?: string;
  authorId?: string;
  authorName?: string;
  is_publication?: boolean;
  skip?: number;
  limit?: number;
  has_private_comments?: boolean;
  popular?: boolean;
}

// Remove Contribution file -----------------
export interface IRemoveContributionFilePayload {
  contributionId: string;
  file_url: string;
}

// Find Comments ------------------------------
export interface IFindCommentsPayload {
  contributionId: string;
}

// Add Comment --------------------------------
export interface IAddCommentPayload {
  contributionId: string;
  content: string;
}

// Remove Comment -----------------------------
export interface IRemoveCommentPayload {
  contributionId: string;
  commentId: string;
}

// Like Contribution ---------------------------
export interface ILikeContributionPayload {
  contributionId: string;
}

// Delete Contribution ---------------------------
export interface IDeleteContributionPayload {
  _id: string;
}

// Add Private Comment ---------------------------
export interface IDownloadContributionFilesPayload {
  fileName: string;
  query: IFindContributionsPayload;
}

// Analysis ---------------------------------------
export interface IGetContrubutionsPerYearPayload {
  year: number;
}
export interface IContributionsByFacultyYear {
  faculty: string;
  data: { month: number; contributions: number }[];
}
export interface ITotalContributionsByFaculty {
  faculty: string;
  published: number;
  not_published: number;
}
export interface IAvgContributionsPerStudent {
  faculty: string;
  avg: number;
}
export interface IAvgContributionPerEvent {
  faculty: string;
  avg: number;
}
