import { apiClient } from "./apiClient";

export const axiosBaseQuery = () =>
  async ({ url, method, data }) => {
    try {
      const response = await apiClient({ url, method, data });
      return { data: response.data };
    } catch (axiosError) {
      const err = axiosError;
      return {
        data: err.response?.data,
      };
    }
  };
