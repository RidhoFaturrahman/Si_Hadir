import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "./api-url";

axios.defaults.baseURL = API_BASE_URL;

const axiosInterceptor = () => {
  const { getLocalStorage } = localStorageHooks();
  const { errorMessage } = Message();

  axios.interceptors.request.use(
    (config) => {
      if (!config.headers.Authorization) {
        const plainToken = getLocalStorage(LOCALSTORAGE_KEY.TOKEN);
        const token = plainToken;
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        errorMessage(error);
        window.location.href = LOGIN_PATH;
      }
      return error;
    }
  );
};

const useAxios = (axiosParams) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        axiosInterceptor();
        const result = await axios.request(axiosParams);
        setResponse(result.data);
      } catch (err) {
        setError(err);
      } finally {
        setloading(false);
      }
    };
    fetchData();
  }, []);

  return { response, error, loading };
};

export const fetcher = async (url, config) => {
  const header = {
    ...config,
    url,
    headers: {
      "Content-Type": "application/json",
      ...config?.headers,
    },
  };

  try {
    axiosInterceptor();
    const res = await axios.request(header);
    return res;
  } catch (err) {
    throw err?.response;
  }
};

export default useAxios;
