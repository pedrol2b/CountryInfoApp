/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { withQueryClient } from "@/HOCs/withQueryClient";
import { useFetchCountries } from "@/hooks/useFetchCountries";
import { useRouter } from "next/navigation";

function Home() {
  const { data: countries, isLoading, error } = useFetchCountries();
  const router = useRouter();

  const handleCountryClick = (countryCode: string) => {
    router.push(`/country/${countryCode}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading countries</div>;

  return (
    <>
      <div className="fixed p-4 right-0">
        <ModeToggle />
      </div>
      <div className="p-6 text-2xl font-bold">Available Countries</div>
      <div className="flex-1 flex justify-start">
        <div className="pb-6 px-6 flex flex-col space-y-2">
          {countries?.map(({ name, countryCode }, index) => (
            <div key={`${countryCode}-${index}`}>
              <Button
                variant="ghost"
                onClick={() => handleCountryClick(countryCode)}
              >
                {name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default withQueryClient(Home);
