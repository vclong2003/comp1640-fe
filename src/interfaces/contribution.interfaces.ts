export interface IContribution {
  _id: string;
  title: string;
  description: string;
  banner_image_url: string;
  submitted_at: Date;
  is_publication: boolean;
  is_editable: boolean;
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
  documents: {
    file_name: string;
    file_url: string;
  }[];
  images: {
    file_name: string;
    file_url: string;
  }[];
}

export interface IContributionState {
  contributions: Partial<IContribution>[];
  total: number;
}

// Add Contribution --------------------------
export interface IAddContributionPayload {
  title: string;
  description: string;
  eventId: string;
  documents: File[];
  images: File[];
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
}

// Remove Contribution file -----------------
export interface IRemoveContributionFilePayload {
  contributionId: string;
  file_url: string;
}

// Comment ----------------------------------
export interface IComment {
  _id: string;
  content: string;
  posted_at: Date;
  author: {
    _id: string;
    avatar_url: string;
    name: string;
  };
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
