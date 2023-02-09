import { IRecipe, IRecipeFromServer } from "../recipe";

export interface IProfileRecipes {
  recipe_id: number | string;
  recipe: IRecipeFromServer;
}
export interface ICommentRecipe {
  comment: string;
  created_at: string;
  id: number;
  is_read: boolean;
  likes_count: number;
  rateable: {
    id: number;
    title: string;
    description: string;
    total_time: number;
  };
  rating: number;
  replies: any[];
  updated_at: string;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  };
  user_id: number;
}
