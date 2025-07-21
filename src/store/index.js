import { configureStore } from '@reduxjs/toolkit'
import { addToCartSlice } from './featrues/addToCart'

export const store = configureStore({
    reducer: {
        addToCartSlice
    },
})