import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page:1
}

const PageSlice = createSlice({
    name: 'Page',
    initialState: initialState,
    reducers: {
        setPage(state, action) {
            state.page = action.payload
        }
    }
})

export default PageSlice
export const PageActions = PageSlice.actions