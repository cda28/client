import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query"

const API_URL = 'http://localhost:8000'

export const apiSlice = createApi({
     reducerPath : 'api',
     baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        credentials: 'include',  // pour échanger les cookies avec les api 
        prepareHeaders: (headers) => {

            return headers
        }
     }),
     tagTypes : ['STUDENTS', 'TEACHERS'], // 
     endpoints: () => ({}) // on va slicer les endpoints par ressource 
});