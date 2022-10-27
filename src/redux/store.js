import { configureStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactReducer } from './ContactSlice';
import { filterReducer } from './FilterSlice';
import { authReducer } from './auth/authSlice';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'


const enhancer = devToolsEnhancer();

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};


export const store = configureStore({
    reducer: {
        contacts: contactReducer,
        filter: filterReducer,
        auth: persistReducer(authPersistConfig, authReducer)
    },
    enhancer,
    middleware(getDefaultMiddleWare) {
        return getDefaultMiddleWare({
            serializableCheck: {
                ignoredAction: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        });
    },


    devTools: process.env.NODE_ENV === 'development',
});


export const persistor = persistStore(store)