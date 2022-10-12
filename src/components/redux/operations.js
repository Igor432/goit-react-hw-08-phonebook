import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://mockapi.io/projects/632b155a713d41bc8e7ff8c7';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async(_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (e) {
            console.log(e.message)
            return thunkAPI.rejectWithValue(e.message);

        }
    }
);