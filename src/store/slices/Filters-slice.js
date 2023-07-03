import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    country: 'in',
    category: 'general'
}

const FiltersSlice = createSlice({
    name: 'Filters',
    initialState: initialState,
    reducers: {
        setCategory(state, action) {
            state.category = action.payload
        },
        setCountry(state, action) {
            state.country = action.payload
        }
    }
})

export default FiltersSlice
export const FiltersActions = FiltersSlice.actions