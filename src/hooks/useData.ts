import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError, type AxiosRequestConfig  } from "axios";

interface Response <T>{
  count: number;
  results: T[];
}
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError("");
    apiClient
      .get<Response<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => {
        if (controller.signal.aborted) return;
        setLoading(false);
      });
    return () => controller.abort();
  }, [endpoint, requestConfig]);
  return { data, error, loading };
};

export default useData;
