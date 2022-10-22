import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  'x-rapidapi-host': process.env.REACT_APP_BASE_API_URL,
};
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });


export const taskApi = createApi({
    reducerPath: "tasksApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "https://sats2data.kingsleyotto1.repl.co",
      mode: "cors",
      prepareHeaders: (headers) => {
        headers.set('Access-Control-Allow-Origin', '*')
        // headers.set('Access-Control-Allow-Methods', 'GET') //
        // headers.set('Access-Control-Allow-Headers', '*') //
        return headers
      },
    }),
    tagTypes: ["Task"],
      endpoints: (builder) => ({

        getCountry : builder.query({
            query : ()  => createRequest ( '/countries')

        })
      })
})

export const {
    useGetCountryQuery,
} = taskApi;
