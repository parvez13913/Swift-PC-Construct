import { createSlice } from '@reduxjs/toolkit';




const initialState = {
    components: []
}

const componentSlice = createSlice({
    name: "pcSlice",
    initialState,
    reducers: {
        selectComponent: (state, action) => {
            const existing = state.components.find(component => component?._id === action?.payload?._id);

            if (existing) {
                existing.quantity += 1;
            }
            else {
                state.components.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromComponent: (state, action) => {
            state.components = state.components.filter(component => component._id !== action.payload._id);
        }
    }
})


export const { selectComponent, removeFromComponent } = componentSlice.actions;

export default componentSlice.reducer;