import { createSlice } from '@reduxjs/toolkit';



export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filter: ""
    },
    reducers: {
        setContactFilter(state, action) {
            state.filter = action.payload;
        },
    },
});

export const filterReducer = filterSlice.reducer;
export const { setContactFilter } = filterSlice.actions;