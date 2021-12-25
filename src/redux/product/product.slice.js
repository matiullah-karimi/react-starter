import { createSlice } from '@reduxjs/toolkit'
import { getProducts, getProduct } from '../../services/products.service';

const initialState = {
    products: [],
    loading: true,
    error: null,
    product: null
}

export const productSlice = createSlice({
    name: 'product',
    initialState,

    reducers: {
        fetchProductStart: (state) => {
            state.loading = true
        },

        fetchProductsComplete: (state, action) => {
            state.products = action.payload.map(p => ({...p, liked: false}));
            state.loading = false
        },

        fetchProductError: (state, action) => {
            state.error = action.payload;
            state.loading = false
        },

        toggleLiked: (state, action) => {
            state.products = state.products.map(p => p.id === action.payload.id ? ({...p, liked: !p.liked }) : p);
        },

        fetchProductDetails: (state, action) => {
           state.product = action.payload;
           state.loading = false;
           state.error = null;
        }
    },
})

/**
 * Fetch collection of products
 * 
 * @returns List of products
 */
export const fetchProducts = () => async (dispatch) => {
    try {
        dispatch(fetchProductStart());

        const response = await getProducts();

        dispatch(fetchProductsComplete(response))
    } catch (error) {
        dispatch(fetchProductError(error));
    }
}

/**
 * Fetch a single product
 * 
 * @returns a single product
 */
 export const fetchProduct = (id) => async (dispatch) => {
    try {
        dispatch(fetchProductStart());

        const response = await getProduct(id);

        dispatch(fetchProductDetails(response))
    } catch (error) {
        dispatch(fetchProductError(error));
    }
}

// Action creators are generated for each case reducer function
export const { 
    fetchProductStart, fetchProductsComplete, fetchProductError,
    toggleLiked, fetchProductDetails
} = productSlice.actions

export default productSlice.reducer

// Selectors
export const selectProductsState = state => state.products;