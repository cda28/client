import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const API_URL = 'http://localhost:8000'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        credentials: 'include', // les cookies et info dans le headers pour l'API
        prepareHeaders: (headers) => {

            return headers
        },
    }),
    tagTypes: [
        'STUDENTS', 'TEACHERS'],
    endpoints: () => ({}),
});