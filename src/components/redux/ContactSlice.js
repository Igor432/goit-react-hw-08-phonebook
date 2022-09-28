import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const initialState = {
    contacts: []
};

export const itemSlice = createSlice({
    name: 'contacts',
    initialState: initialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contacts.push(action.payload)
            },
            prepare(name, number) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid(),
                    },
                }
            }
        },
        deleteContact(state, action) {
            const index = state.contacts.findIndex(contact => contact.id === action.payload);
            state.contacts.splice(index, 1);
        },
    },
});

export const contactReducer = itemSlice.reducer;
export const { addContact, deleteContact } = itemSlice.actions;