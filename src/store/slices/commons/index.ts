import { ICategory } from "@/types/category"
import { ILocation } from "@/types/location"
import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

//Initial state type
interface ICommonState {
  countries: ILocation[]
  selectedCountries: ILocation[]
  cookingTime: string
  categories: ICategory[]
  selectedCategories: ICategory[]
  sort: string
}

//Initial state
const initialState: ICommonState = {
  countries: [],
  selectedCountries: [],
  categories: [],
  cookingTime: "",
  selectedCategories: [],
  sort: ""
}

const commonsSlice = createSlice({
  name: "commons",
  initialState,
  reducers: {
    setCountries(state, action: PayloadAction<ILocation[]>) {
      state.countries = action.payload
    },
    setSelectedCountries(state, action: PayloadAction<ILocation[]>) {
      state.selectedCountries = action.payload
    },
    setCookingTime(state, action: PayloadAction<string>) {
      state.cookingTime = action.payload
    },
    setCategories(state, action: PayloadAction<any[]>) {
      state.categories = action.payload
    },
    setSelectedCategories(state, action: PayloadAction<ICategory[]>) {
      state.selectedCategories = action.payload
    },
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload
    }
  }
})

export const {
  setCountries: actionSetCountries,
  setSelectedCountries: actionSetSelectedCountries,
  setCookingTime: actionSetCookingTime,
  setCategories: actionSetCategories,
  setSelectedCategories: actionSetSelectedCategories,
  setSort: actionSetSort
} = commonsSlice.actions

export default commonsSlice.reducer
