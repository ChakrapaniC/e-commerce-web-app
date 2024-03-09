import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../features/ProductSlice'
export const store = configureStore({
    reducer: {
        products:productsReducer
    }
})