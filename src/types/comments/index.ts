import { IUser } from "../user";

export interface ICommentMeta {
  rating: number;
  updated_at: string;
}

export interface ICommentCard {
  comment: string;
  created_at: string;
  id: number | string;
  is_liked_by_you: boolean;
  is_read: boolean;
  likes_count: number | string;
  rateable: IRateable;
  rating: number;
  replies: ICommentCard[];
  updated_at: string;
  user: IUser;
  user_id: number;
}

export interface IRateable {
  admin_id: null | string | number;
  available_status: string[];
  bookmarks_count: number | string;
  buy_count: number | string;
  comments_count: number | string;
  completed_video: string;
  completed_video_views_count: string | number;
  country: {
    id: number;
    name: string;
    iso3: string;
    numeric_code: number;
    iso2: string;
    phonecode: string;
  };
  country_id: number;
  created_at: string;
  deleted_at: null | string;
  description: string;
  food: null | string;
  id: number | string;
  likes_count: number | string;
  media: any[];
  meta: null | string | number;
  ratings_summary: { count: number; avg: number; percent: number };
  serving: string;
  slug: string;
  status: string;
  subtitles: any[];
  thumbnail: string;
  title: string;
  total_time: string | number;
  trailer: string;
  trailer_views_count: string | number;
  updated_at: string;
  user: IUserComment;
  views_count: number;
  rating: number;
}
export interface IComment {
  id: string;
  comment: string;
  user: IUser;
  children?: IComment[];
  replies?: IComment[];
  likes_count: number;
  is_liked_by_you: boolean;
  rating: number;
  updated_at: string;
  meta?: ICommentMeta;
}
export interface HeadingProfileReviewCardData {
  rating: number | string;
  user: IUserComment;
  created_at: string | number;
  likes_count: number | string;
  recipe_id: any;
  item_id: number | string;
  reply_id: number | string | null;
}
export interface IUserComment {
  id: number;
  first_name: string;
  last_name: string;
  email?: string;
}
