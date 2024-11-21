import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "../api/apiSlice"

export const store = configureStore({
    reducer : {
        [apiSlice.reducerPath] : apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(apiSlice.middleware)
})

// il faut aussi définir des types pour le codebase
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;