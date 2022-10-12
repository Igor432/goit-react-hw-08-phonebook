import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://632b155a713d41bc8e7ff8c6.mockapi.io/';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async(_, thunkAPI) => {
        try {
            const response = await axios.get('/Contacts');
            return response.data;
        } catch (e) {
            console.log(e.message);
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async(contact, thunkAPI) => {
        try {
            const response = await axios.post('/Contacts', contact);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async(contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/Contacts/${contactId}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);