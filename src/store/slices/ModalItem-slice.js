import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    urlToImage: '',
    title: '',
    content: ''
}


const ModalItemSlice = createSlice({
    name: 'ModalItem',
    initialState: initialState,
    reducers: {
        setModalItem(state, action) {
            state.urlToImage = action.payload.urlToImage
            state.title = action.payload.title
            state.content = action.payload.content
        }
    }
})

export default ModalItemSlice
export const ModalItemActions = ModalItemSlice.actions