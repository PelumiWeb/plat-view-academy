import { useState, useCallback } from 'react';

interface FetchOptions {
  headers?: HeadersInit;
  body?: any;
}

interface UseFetchReturn {
  data: any;
  error: Error | null;
  loading: boolean;
  get: (url: string, options?: FetchOptions) => Promise<any>;
  post: (url: string, body?: any, options?: FetchOptions) => Promise<any>;
  put: (url: string, body?: any, options?: FetchOptions) => Promise<any>;
  patch: (url: string, body?: any, options?: FetchOptions) => Promise<any>;
  del: (url: string, options?: FetchOptions) => Promise<any>;
}

export const useFetch = (): UseFetchReturn => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(
    async (url: string, method: string, body?: any, options?: FetchOptions) => {
      setLoading(true);
      setError(null);

      try {
        const config: RequestInit = {
          method,
          headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
          },
        };

        if (body) {
          config.body = JSON.stringify(body);
        }

        const res = await fetch(url, config);
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const result = await res.json();
        setData(result);
        return result;
      } catch (err) {
        const error = err instanceof Error ? err : new Error('An error occurred');
        setError(error);
        throw error;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const get = useCallback(
    (url: string, options?: FetchOptions) => request(url, 'GET', undefined, options),
    [request]
  );

  const post = useCallback(
    (url: string, body?: any, options?: FetchOptions) => request(url, 'POST', body, options),
    [request]
  );

  const put = useCallback(
    (url: string, body?: any, options?: FetchOptions) => request(url, 'PUT', body, options),
    [request]
  );

  const patch = useCallback(
    (url: string, body?: any, options?: FetchOptions) => request(url, 'PATCH', body, options),
    [request]
  );

  const del = useCallback(
    (url: string, options?: FetchOptions) => request(url, 'DELETE', undefined, options),
    [request]
  );

  return { data, error, loading, get, post, put, patch, del };
};