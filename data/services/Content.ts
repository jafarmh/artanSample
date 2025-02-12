

import { baseQueryWithReAuth } from "../ApiCal";
import { createApi } from '@reduxjs/toolkit/query/react'
import { ContentData } from "@/types/ContentData";
import { ContentAddPropsApi, ContentRemovePropsApi, ContentUpdatePropsApi } from "@/types/interfaces/ContentInterface";
 
export const ContentApi = createApi({
    reducerPath: 'ContentApi',
    baseQuery: baseQueryWithReAuth,

    tagTypes: ["Content"],

    endpoints: (builder) => ({
        Content: builder.query<ContentData[], void>({
            query: () => ({
                url: "content",
                method: 'GET',
            }),
            providesTags: ['Content'],
        }),
    
        ContentAdd: builder.mutation<any, ContentAddPropsApi>({
            query: (body) => ({
                url: "content",
                method: 'POST',

                body
            }),
            invalidatesTags: ['Content'],
        }),

        ContentEdit: builder.mutation<void, ContentUpdatePropsApi>({
            query: ({ id, ...res }) => ({
                url: "content/" + id,
                method: 'PUT',
                body:res
           
            }),
            invalidatesTags: ['Content'],
        }),

        ContentRemove: builder.mutation<void, ContentRemovePropsApi>({
            query: (body) => ({
                url: "content/" + body.id,
                method: 'DELETE',

            }),
            invalidatesTags: ['Content'],
        }),



    }),



})

export const {
    useContentQuery,
    useContentAddMutation,
    useContentEditMutation,
    useContentRemoveMutation
 
} = ContentApi


