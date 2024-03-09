import {  createSlice } from "@reduxjs/toolkit";
import { ProductsData } from "../utils/ProductsData";

const initialState = {
    products: ProductsData,
    selectedProduct: null,
    modal: false,
    selectedCategory: null
  };

 
export const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        singleProduct: (state, action) => {
            const idToSelect = action.payload;
            state.selectedProduct = state.products.find(item => item.id === idToSelect);
        },
        toggleModal: (state) =>{
            state.modal = !state.modal
        },
        selectCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    }
})
export const { singleProduct, toggleModal, selectCategory } = productSlice.actions;

export const selectFilteredProducts = (state) => {
    const { products, selectedCategory } = state.products;
    return selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;
};
export default productSlice.reducer