import {  configureStore} from "@reduxjs/toolkit";
import ModalItemSlice from "./slices/ModalItem-slice";
import FiltersSlice from "./slices/Filters-slice";
import PageSlice from "./slices/Page-slice";
const store= configureStore({
    reducer:{
      ModalItem:ModalItemSlice.reducer,
      Filters:FiltersSlice.reducer,
      Page:PageSlice.reducer
    }
})

export default store