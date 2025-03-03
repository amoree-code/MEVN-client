import axios from "axios";

export default function useAxios() {
  const url = "https://mevn-api-one.vercel.app/api/";

  const axiosInstance = axios.create({
    baseURL: url,
  });

  return axiosInstance;
}
