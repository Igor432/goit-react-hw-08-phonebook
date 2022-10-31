import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';


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
        console.log(credentials)
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
        Notiflix.Notify.failure("Invalid email or password");
        console.log(error)
        return thunkAPI.rejectWithValue(error.message);

    }
})

export const logOut = createAsyncThunk('auth/logout', async(_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        // After a successful logout, remove the token from the HTTP header
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});


export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async(_, thunkAPI) => {
        // Reading the token from the state via getState()
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            // If there is no token, exit without performing any request
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }

        try {
            // If there is a token, add it to the HTTP header and perform the request
            setAuthHeader(persistedToken);
            const res = await axios.get('/users/current');
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);