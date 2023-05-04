import axios, { AxiosInstance } from "axios";

export default class AxiosClient {
  private static instance: AxiosInstance;

  static getInstance() {
    if (!AxiosClient.instance)
      AxiosClient.instance = axios.create({
        baseURL: `https://api.themoviedb.org/3`,
        params: {
          api_key: `c02746c2cf3270aaa43043e687a83043`,
          language: "fa-IR",
        },
      });
    return AxiosClient.instance;
  }
}
