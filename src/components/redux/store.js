import { configureStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactReducer } from './ContactSlice';
import { filterReducer } from './FilterSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedContact = persistReducer(persistConfig, contactReducer);

const enhancer = devToolsEnhancer();

export const store = configureStore({
    reducer: {
        contacts: persistedContact,
        filter: filterReducer,
    },

    middleware(getDefaultMiddleWare) {
        return getDefaultMiddleWare({
            serializableCheck: {
                ignoredAction: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        });
    },

    enhancer,
});

export const persistor = persistStore(store);