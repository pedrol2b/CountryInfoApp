/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { withQueryClient } from "@/app/HOCs/withQueryClient";
import { useFetchCountries } from "@/app/hooks/useFetchCountries";

function Home() {
  const { data: countries, isLoading, error } = useFetchCountries();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading countries</div>;

  return (
    <div>
      {countries?.map((country: any) => (
        <div key={country.code}>{country.name}</div>
      ))}
    </div>
  );
}

export default withQueryClient(Home);
