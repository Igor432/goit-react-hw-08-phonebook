import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

export const itemSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected]: handleRejected,
        [addContact.pending]: handlePending,
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload)
        },
        [deleteContact.pending]: handlePending,
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.filter(
                contact => contact.id !== action.payload
            );

        },
        [deleteContact.rejected]: handleRejected
    },
});

export const contactReducer = itemSlice.reducer;