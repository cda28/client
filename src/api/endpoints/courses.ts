/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiSlice } from "../apiSlice"

export const courseApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCourses: builder.query({
          query: () => `api/courses`,
        }),
    })
});

// Export de la fonction qui va de manière effective faire la requête
export const { useGetCoursesQuery } = courseApi;

