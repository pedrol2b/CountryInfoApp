/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Header } from '@/components/Header'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { withQueryClient } from '@/HOCs/withQueryClient'
import { useFetchCountries } from '@/hooks/useFetchCountries'
import { List } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useCallback, useState } from 'react'

const Home: React.FC = () => {
  const router = useRouter()
  const { data: countries, isLoading, error } = useFetchCountries()

  const [searchTerm, setSearchTerm] = useState('')

  const handleNavigateToCountry = useCallback((countryCode: string) => router.push(`/country/${countryCode}`), [router])

  // TODO: create a component for error and loading
  /**
   * There's no time for creating error/loading component, sorry
   * https://imgur.com/EIltHmR
   */
  if (isLoading) return null
  if (error) return null

  const filteredCountries = countries?.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="w-full p-6">
      <Header />
      <div className="mt-10 flex flex-col gap-y-6 p-8">
        <div className="flex flex-row items-center gap-x-4">
          <List size={24} strokeWidth={1.6} />
          <h2 className="text-xl capitalize text-neutral-400">available countries</h2>
        </div>
        <Input
          type="text"
          placeholder="Search by country name"
          value={searchTerm}
          onChange={({ target }) => setSearchTerm(target.value)}
          className="rounded-md border p-6"
        />
        <div className="overflow-hidden rounded-md border shadow-lg">
          <Table className="min-w-full divide-y">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-500">
                  #
                </TableHead>
                <TableHead className="w-[200px] px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-500">
                  country code
                </TableHead>
                <TableHead className="x-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-500">
                  name
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y">
              {filteredCountries?.map(({ name, countryCode }, index) => (
                <TableRow
                  key={`${countryCode}-${index}`}
                  className="cursor-pointer"
                  onClick={() => handleNavigateToCountry(countryCode)}
                >
                  <TableCell className="whitespace-nowrap px-6 py-4 text-sm font-medium text-neutral-600">
                    {index + 1}
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-6 py-4 text-sm text-neutral-500">{countryCode}</TableCell>
                  <TableCell className="whitespace-nowrap px-6 py-4 text-sm text-neutral-500">{name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default withQueryClient(Home)
