import axios, { CreateAxiosDefaults } from "axios";

const options: CreateAxiosDefaults = {
    baseURL: "https://app.ftoyd.com/",

    headers: {
      "Content-Type": "application/json",
    },
  };

  export const axiosClassic = axios.create(options);
