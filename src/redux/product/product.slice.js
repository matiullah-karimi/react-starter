import { createSlice } from '@reduxjs/toolkit'
import { getProducts } from '../../services/products.service';

const initialState = {
    products: [],
    loading: true,
    error: null
}

export const productSlice = createSlice({
    name: 'product',
    initialState,

    reducers: {
        fetchProductStart: (state) => {
            state.loading = true
        },

        fetchProductComplete: (state, action) => {
            state.products = action.payload.map(p => ({...p, liked: false}));
            state.loading = false
        },

        fetchProductError: (state, action) => {
            state.error = action.payload;
            state.loading = false
        },

        toggleLiked: (state, action) => {
            state.products = state.products.map(p => p.id === action.payload.id ? ({...p, liked: !p.liked }) : p);
        }
    },
})

export const fetchProducts = () => async (dispatch) => {
    try {
        dispatch(fetchProductStart());

        const response = await getProducts();

        dispatch(fetchProductComplete(response))
    } catch (error) {
        dispatch(fetchProductError(error));
    }
}

// Action creators are generated for each case reducer function
export const { 
    getAll, fetchProductStart, fetchProductComplete, fetchProductError,
    toggleLiked
} = productSlice.actions

export default productSlice.reducer

// Selectors
export const selectProductsState = state => state.products;