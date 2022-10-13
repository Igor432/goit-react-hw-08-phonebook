import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';



const initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null,
    },
    filter: '',
};

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

export const itemSlice = createSlice({
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
    reducers: {
        setContactFilter(state, action) {
            state.filter = action.payload;
        },
    },
});

export const { setContactFilter } = itemSlice.actions;
export const contactReducer = itemSlice.reducer;