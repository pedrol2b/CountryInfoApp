'use client'

import { API } from '@/services/API'
import { useQuery } from 'react-query'

const api = API.getInstance().getAPIClient()

type CountryInfoResponse = {
  countryName: string
  flag: string
  borders: Array<{
    commonName: string
    officialName: string
    countryCode: string
    region: string
    borders: unknown
  }>
  population: Array<{
    year: number
    value: number
  }>
}

const fetchCountryInfo = async (countryCode: string) => {
  const { data } = await api.get<CountryInfoResponse>(`/api/country-info/${countryCode}`)
  return data
}

export const useFetchCountryInfo = (countryCode: string) => {
  return useQuery(['country-info', countryCode], () => fetchCountryInfo(countryCode))
}
