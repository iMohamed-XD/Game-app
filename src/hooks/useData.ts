import { useQuery } from "@tanstack/react-query";
import type { AxiosRequestConfig } from "axios";
import apiClient from "../services/apiClient";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig) => {
  return useQuery<T[], Error>({
    queryKey: [endpoint, requestConfig],
    queryFn: () =>
      apiClient
        .get<FetchResponse<T>>(endpoint, requestConfig)
        .then((res) => res.data.results),
  });
};

export default useData;
