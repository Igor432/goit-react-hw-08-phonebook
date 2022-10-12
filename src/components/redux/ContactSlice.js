import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';


const handlePending = state => {
    state.isLoading = true
}

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;

}

export const itemSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: {
            items: [],
            isLoading: false,
            error: null
        }
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items = action.payload
        },
        [fetchContacts.rejected]: handleRejected
    }


})


export const contactReducer = itemSlice.reducer;
export const { addContact, deleteContact } = itemSlice.actions;