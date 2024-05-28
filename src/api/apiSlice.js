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
            invalidatesTags: ['Goods']
        }),
        deleteItem: builder.mutation({
            query: id => ({
                url: `/cart/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [`Goods`]
        })
    })
});

export const {useGetCurrentQuery, useGetCartQuery, useAddToCartMutation, useDeleteItemMutation} = apiSlice;