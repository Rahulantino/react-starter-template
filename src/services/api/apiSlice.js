import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";

export const apiSlice = createApi({
  reducerPath: `apiSlice`,
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
});
