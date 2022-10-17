import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';



const initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null,
    }
};

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

export const contactSlice = createSlice({
    name: 'contacts',
    initialState: initialState,

    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.contacts.items = action.payload;
        },
        [fetchContacts.rejected]: handleRejected,
        [addContact.pending]: handlePending,
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.contacts.items.push(action.payload);
        },
        [deleteContact.pending]: handlePending,
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.contacts.items.filter(contact => contact.id !== action.payload);
        },
        [deleteContact.rejected]: handleRejected,
    },
});

export const contactReducer = contactSlice.reducer;