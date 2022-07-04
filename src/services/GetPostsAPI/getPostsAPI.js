import { apiSlice } from "../api/apiSlice";
import GetPostAPIs from "../../common/endpoints";

export const getPostsAPI = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => ({
        url: GetPostAPIs.getPosts,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPostsQuery } = getPostsAPI;
