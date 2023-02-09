import { StoreType } from "@/store/store";
import { createSelector } from "reselect";

const addRecipeStore = (state: StoreType) => state.addRecipe;

export const addRecipeSelector = createSelector(
  addRecipeStore,
  (addRecipe) => addRecipe
);

export const currentStepSelector = createSelector(
  addRecipeStore,
  (addRecipe) => addRecipe.currentStep
);
