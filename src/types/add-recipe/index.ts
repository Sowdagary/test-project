import { IMedia } from "../media";

export interface IFood {
  title: string;
  description: string;
}

export interface ISubtitle {
  lang: string;
  file: File;
}

export type IIngredientType =
  | "pinch"
  | "point"
  | "teaspoon"
  | "cup"
  | "gram"
  | "kilogram";

export interface IIngredient {
  id?: number;
  title: string;
  description: string;
  amount: number;
  available_unit_types: IIngredientType[];
  created_at: string;
  icon: string;
  media: IMedia[];
  unit_type: IIngredientType;
  updated_at: string;
}
