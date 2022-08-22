import { configureStore } from "@reduxjs/toolkit";
import userReducer from 'features/user_auth';


export const store = configureStore({
    reducer: {
        user: userReducer,
    },
    devTools: process.env.NODE_ENV !== 'production'
});
