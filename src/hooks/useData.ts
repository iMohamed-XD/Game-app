import { useInfiniteQuery } from "@tanstack/react-query";
import type { AxiosRequestConfig } from "axios";
import apiClient from "../services/apiClient";

interface FetchResponse<T> {
  next: string | null;
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig) => {
  return useInfiniteQuery<FetchResponse<T>, Error>({
    queryKey: [endpoint, requestConfig],
    queryFn: ({ pageParam = 1 }) =>
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          ...requestConfig,
          params: {
            ...requestConfig?.params,
            page: pageParam,
          },
        })
        .then((res) => res.data),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useData;
