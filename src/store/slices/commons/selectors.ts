import { StoreType } from "@/store/store"
import { createSelector } from "reselect"

const commonsStore = (state: StoreType) => state.commons

export const commonsSelector = createSelector(
  commonsStore,
  (commons) => commons
)

export const countriesSelector = createSelector(
  commonsStore,
  (commons) => commons.countries
)

export const selectedCountriesSelector = createSelector(
  commonsStore,
  (commons) => commons.selectedCountries
)

export const selectedCookingTimeSelector = createSelector(
  commonsStore,
  (commons) => commons.cookingTime
)

export const categoriesSelector = createSelector(
  commonsStore,
  (commons) => commons.categories
)

export const selectedCategoriesSelector = createSelector(
  commonsStore,
  (commons) => commons.selectedCategories
)

export const selectedSort = createSelector(
  commonsStore,
  (commons) => commons.sort
)
