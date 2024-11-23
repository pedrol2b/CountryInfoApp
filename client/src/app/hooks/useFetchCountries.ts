"use client";

import { API } from "@/services/API";
import { useQuery } from "react-query";

const api = API.getInstance().getAPIClient();

const fetchCountries = async () => {
  const { data } = await api.get("/api/available-countries");
  return data;
};

export const useFetchCountries = () => {
  return useQuery("countries", fetchCountries);
};
