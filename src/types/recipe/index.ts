import { IMedia } from "../media";
import { IIngredient, IIngredientType, ISubtitle } from "../add-recipe";
import { IChef, IUser } from "../user";
import { ICategory } from "../category";
import { ILocation } from "../location";

export interface IRecipeIngredient {
  id: number;
  title: string;
  description: string | null;
  unit_type: IIngredientType;
  created_at: string;
  updated_at: string;
  amount: number;
  icon: string;
  available_unit_types: IIngredientType[];
}

export interface IRate {
  count: number;
  avg: number;
  percent: number;
}

export interface IRecipe {
  title: string;
  description: string;
  ratings_summary: IRate;
  id: number;
  slug: string;
  completed_video: string;
  trailer: string;
  thumbnail: string;
  total_time: string;
  serving: number;
  likes_count: number;
  views_count: number;
  buy_count: number;
  comments_count: number;
  ingredients: IRecipeIngredient[];
  is_liked_by_you: boolean;
  is_bookmark_by_you: boolean;
  is_watch_later_by_you: boolean;
  is_bought_by_you: boolean;
  country: ILocation;
  user: IUser | IChef;
}

export interface IRecipeFromServer {
  admin_id: null | string;
  available_status: string[];
  bookmarks_count: number;
  buy_count: number;
  comments_count: number;
  completed_video: string;
  completed_video_views_count: number;
  country: any;
  country_id: any;
  created_at: string;
  deleted_at: string | null;
  description: string | null;
  food: any;
  id: number;
  likes_count: number;
  media: IMedia[];
  meta: null;
  ratings_summary: { count: number; avg: number; percent: number };
  serving: any;
  slug: any;
  status: string;
  subtitles: ISubtitle[];
  thumbnail: string;
  title: string | null;
  total_time: string | null;
  trailer: string | null;
  trailer_views_count: number;
  updated_at: string;
  user: IUser;
  views_count: number;
}

export interface IReceivedRecipe {
  admin_id: number | null;
  available_status: string[];
  bookmarks_count: string;
  buy_count: number;
  categories: ICategory[];
  comments_count: number;
  completed_video: string | File | null;
  completed_video_views_count: string;
  country: ILocation[] | null;
  country_id: number | null;
  created_at: string;
  deleted_at: string | null;
  description: string;
  food: any[] | null;
  id: number;
  ingredients: IRecipeIngredient[];
  is_bookmark_by_you: boolean;
  is_bought_by_you: boolean;
  is_liked_by_you: boolean;
  is_watch_later_by_you: boolean;
  likes_count: string;
  media: IMedia[];
  meta: any[] | null;
  ratings_summary: { count: number; avg: number; percent: number };
  serving: string;
  slug: string;
  status: string;
  subtitles: any[];
  thumbnail: string;
  title: string;
  total_time: string;
  trailer: string;
  trailer_views_count: string;
  updated_at: string;
  user: IUser;
  views_count: string;
}
