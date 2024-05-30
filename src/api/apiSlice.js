import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    tagTypes: ['Current'],
    endpoints: builder => ({
        getCurrent: builder.query({
            query: (id = '') => `/current/${id}`,
            providesTags: ['Current']
        }),
        getCart: builder.query({
            query: () => '/cart',
            providesTags: ['Cart']
        }),
        addToCart: builder.mutation({
            query: good => ({
                url: '/cart',
                method: 'POST',
                body: good
            }),
            invalidatesTags: ['Cart'] // Invalidate the 'Cart' tag after adding an item
        }),
        deleteItem: builder.mutation({
            query: id => ({
                url: `/cart/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Cart'] // Invalidate the 'Cart' tag after deleting an item
        }),
    })
});

export const { useGetCurrentQuery, useGetCartQuery, useAddToCartMutation, useDeleteItemMutation } = apiSlice;
