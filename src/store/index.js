import { configureStore } from "@reduxjs/toolkit";

import user from '../store/Slices/UserSlice'

import filters from '../components/sidebar/SidebarSlice';
import { apiSlice } from "../api/apiSlice";

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};

const store = configureStore({
    reducer: {  filters,
                user, 
                [apiSlice.reducerPath]: apiSlice.reducer},
                middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware, apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;