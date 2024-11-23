/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { withQueryClient } from "@/HOCs/withQueryClient";
import { useFetchCountryInfo } from "@/hooks/useFetchCountryInfo";
import { useParams } from "next/navigation";
import React from "react";

const CountryInfo: React.FC = () => {
  const params = useParams();
  const countryCode = params.countryCode;

  const {
    data: country,
    isLoading,
    error,
  } = useFetchCountryInfo(countryCode as string);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading country details</div>;

  return (
    <div>
      <h1>{country.name}</h1>
      <p>Country Code: {country.countryCode}</p>
    </div>
  );
};

export default withQueryClient(CountryInfo);
