import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 0,
}
export const addToCartSlice = createSlice(
    {
        name: 'Product',
        initialState,
        reducers: {
            add: (state) => {
                state.count += 1
            },
            remove: (state) => {
                state.count -= 1;
            }
        }
    }
)

export const { add, remove } = addToCartSlice.actions;

export const selectCounterSlice = (state) => state.addToCartSlice;

export default addToCartSlice.reducer;