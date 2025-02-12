import { baseUrl } from './../config';
import type {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query'

import { fetchBaseQuery } from '@reduxjs/toolkit/query'

const baseQuery = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
        headers.set("Accept", "application/json")

        return headers;
    },
})
export const baseQueryWithReAuth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions: any) => {
    let result = await baseQuery(args, api, extraOptions);



    if (result.error) {
        let error: any = result.error;
        console.log(error?.data?.message ?? "error")
    }

    return result
}
