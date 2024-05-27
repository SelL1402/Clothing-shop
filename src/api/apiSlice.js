import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    tagTypes: ['Current'],
    endpoints: builder => ({
        getCurrent: builder.query({
            query: () => '/current',
            providesTags: ['Current']
        }),
    })
});

export const {useGetCurrentQuery} = apiSlice;