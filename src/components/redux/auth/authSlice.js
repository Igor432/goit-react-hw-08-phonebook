import { createSlice } from '@reduxjs/toolkit';
import { LogIn, Register, logOut } from './operations';


export const useAuth = () => {


};

const initialUserState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};


const authSlice = createSlice({
    name: 'auth',
    initialState: initialUserState,
    extraReducers: {
        [Register.fullfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true
        },
        [LogIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true
        },
        [logOut.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },

    }
})




export const authReducer = authSlice.reducer