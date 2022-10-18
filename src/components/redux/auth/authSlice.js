import { createSlice } from '@reduxjs/toolkit';

export const useAuth = () => {


};

const initialUserState = {
    user: { name: '', email: '' },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};


const authSlice = createSlice({
    name: 'auth',
    initialState: initialUserState,
    extraReducers: {

    }
})




export const authReducer = authSlice.reducer