import { createSlice } from '@reduxjs/toolkit';




const initialState = {
    components: []
}

const componentSlice = createSlice({
    name: "pcSlice",
    initialState,
    reducers: {
        selectComponent: (state, action) => {
            const existing = state.components.find(component => component?._id === action?._id);
            if (existing) {

            }
            else {
                state.components.push({ ...action.payload, quantity: 1 });
            }

        }
    }
})


export const { selectComponent } = componentSlice.actions;

export default componentSlice.reducer;