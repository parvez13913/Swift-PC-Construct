import { createSlice } from '@reduxjs/toolkit';




const initialState = {
    components: []
}

const componentSlice = createSlice({
    name: "pcSlice",
    initialState,
    reducers: {
        selectComponent: (state, action) => {
            state.components.push(action.payload);
        }
    }
})


export const { selectComponent } = componentSlice.actions;

export default componentSlice.reducer;