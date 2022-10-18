import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const Register = createAsyncThunk('async/register', async(credentials, thunkAPI) => {
    try {
        const response = await axios.post('/users/signup', credentials)
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);

    }
})

export const LogIn = createAsyncThunk('async/login', async(credentials, thunkAPI) => {
    try {
        const response = await axios.post('/users/login', credentials)
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);

    }
})