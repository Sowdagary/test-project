import { IFood, IIngredient } from "@/types/add-recipe";
import {
  IReceivedRecipe,
  IRecipe,
  IRecipeFromServer,
  IRecipeIngredient,
} from "@/types/recipe";

import { ICategory } from "@/types/category";
import { ILocation } from "@/types/location";
import { ISubtitle } from "./../../../types/add-recipe/index";
import type { IUser } from "@/types/user";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface IRecipeCategory {
  title: string;
  value: string;
}

interface IChangeRecipeIngredient {
  index: number;
  key: string;
  value: string;
}

//Initial state type
interface IAddRecipeState {
  title: string;
  description: string;
  total_time: string;
  serving: string;
  food: IFood[];
  categories: ICategory[] | null;
  country: ILocation | null;
  trailer: File | string | null;
  subtitles: ISubtitle[];
  thumbnail: File | string | null;
  ingredients: IRecipeIngredient[];
  currentStep: number;
  recipeFromServer: IRecipeFromServer | null;
}

//Initial state
const initialState: IAddRecipeState & Partial<IReceivedRecipe> = {
  title: "",
  description: "",
  total_time: "",
  serving: "",
  food: [],
  categories: null,
  country_id: null,
  country: null,
  trailer: null,
  completed_video: null,
  subtitles: [],
  thumbnail: null,
  ingredients: [],
  currentStep: 0,
  recipeFromServer: null,
};

const addRecipeSlice = createSlice({
  name: "add-recipe",
  initialState,
  reducers: {
    changeWithKey(state, action: PayloadAction<any>) {
      state[action.payload.key] = action.payload.value;
    },
    setDefaultRecipe(state, action: PayloadAction<any>) {
      state.recipeFromServer = action?.payload;
    },
    setIngredientItems(state, action: PayloadAction<IRecipeIngredient>) {
      state.ingredients = [...state.ingredients, action.payload];
    },
    removeIngredient(state, action: PayloadAction<number>) {
      let filteredIngredients = state.ingredients.filter((item) => {
        return item.id !== action.payload;
      });
      state.ingredients = filteredIngredients;
    },
    changeIngredientItem(
      state,
      action: PayloadAction<IChangeRecipeIngredient>
    ) {
      let currentIngredients = [...state.ingredients];
      let targetIngredient = currentIngredients.findIndex(
        (item) => item.id === action.payload.index
      );
      currentIngredients[targetIngredient] = {
        ...currentIngredients[targetIngredient],
        [action.payload.key]: action.payload.value,
      };

      state.ingredients = currentIngredients;
    },
    changeCurrentStep(state, action: PayloadAction<number>) {
      state.currentStep = action.payload;
    },
    changeRecipe(state, action: PayloadAction<any>) {
      if (action?.payload && Object.keys(action.payload).length) {
        for (let key of Object.keys(action?.payload)) {
          state[key] = action?.payload?.[key];
        }
      }
    },
    resetRecipeState(state) {
      return { ...initialState, ["recipeFromServer"]: state.recipeFromServer };
    },
  },
});

export const {
  changeWithKey: actionChangeAddRecipeWithKey,
  setDefaultRecipe: actionSetDefaultRecipe,
  setIngredientItems: actionSetIngredients,
  removeIngredient: actionRemoveIngredients,
  changeIngredientItem: actionChangeIngredient,
  changeCurrentStep: actionChangeCurrentStep,
  changeRecipe: actionChangeRecipe,
  resetRecipeState: actionResetRecipeState,
} = addRecipeSlice.actions;

export default addRecipeSlice.reducer;
