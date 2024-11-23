/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { withQueryClient } from '@/HOCs/withQueryClient'
import { useFetchCountryInfo } from '@/hooks/useFetchCountryInfo'
import { useParams } from 'next/navigation'
import React from 'react'

const CountryInfo: React.FC = () => {
  const params = useParams()
  const countryCode = params.countryCode

  const { data: country, isLoading, error } = useFetchCountryInfo(countryCode as string)

  // TODO: create a component for error and loading
  /**
   * There's no time for creating error/loading component, sorry
   * https://imgur.com/EIltHmR
   */
  if (isLoading) return null
  if (error) return null

  return (
    <div>
      <h1>{country.name}</h1>
      <p>Country Code: {country.countryCode}</p>
    </div>
  )
}

export default withQueryClient(CountryInfo)
