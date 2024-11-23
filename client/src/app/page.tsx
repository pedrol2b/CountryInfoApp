/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Header } from '@/components/Header'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { withQueryClient } from '@/HOCs/withQueryClient'
import { useFetchCountries } from '@/hooks/useFetchCountries'
import { List } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useCallback } from 'react'

const Home: React.FC = () => {
  const { data: countries, isLoading, error } = useFetchCountries()
  const router = useRouter()

  const handleNavigateToCountry = useCallback((countryCode: string) => router.push(`/country/${countryCode}`), [router])

  if (isLoading) return null
  if (error) return null

  return (
    <div className="w-full p-6">
      <Header />
      <div className="mt-10 flex flex-col gap-y-6 p-8">
        <div className="flex flex-row items-center gap-x-4">
          <List size={24} strokeWidth={1.6} />
          <h2 className="text-xl capitalize text-neutral-400">available countries</h2>
        </div>
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
              {countries?.map(({ name, countryCode }, index) => (
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
