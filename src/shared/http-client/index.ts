import getConfig from 'next/config';
import axios from 'axios';

const { publicRuntimeConfig } = getConfig();

type FetcherOptions = {
  url: string;
  params?: any;
};

export const HttpClient = axios.create({
  baseURL: publicRuntimeConfig.api.url,
});


export const fetcher = (options: FetcherOptions) => {
  return HttpClient.get(options.url, {
    params: options?.params ?? {},
  }).then((response) => {
    return response.data;
  });
};

export const handleAxiosError = <T>(
  error: T,
  callback: (message: string) => void,
) => {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data as { message: string | string[] };

    if (data) {
      if (Array.isArray(data?.message)) {
        callback(data.message[0]);
      } else {
        callback(data?.message);
      }
    } else {
      callback(error?.message);
    }
  } else {
    if (error instanceof Error) {
      callback(error.message);
    }
  }
};
