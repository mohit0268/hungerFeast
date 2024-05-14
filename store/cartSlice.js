import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items: []
    },
    reducers:{
        addItems: (state,action) => {
            state.items.push(action.payload)
        },
        removeItems: (state,action) => {
            state.items.pop()
        },
        clearItems: (state,action) => {
            state.items.length = 0
        }
    }
})
//exporting all the action 
export const {addItems,removeItems,clearItems} = cartSlice.actions;
//exporting reducer
export default cartSlice.reducer;