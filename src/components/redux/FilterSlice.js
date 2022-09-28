import { createSlice } from '@reduxjs/toolkit';

const filterState = {
    filter: '',
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState: filterState,
    reducers: {
        setContactFilter(state, action) {
            state.filter = action.payload;
        },
    },
});

export const filterReducer = filterSlice.reducer;
export const { setContactFilter } = filterSlice.actions;