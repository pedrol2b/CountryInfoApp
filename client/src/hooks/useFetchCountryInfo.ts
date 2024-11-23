'use client'

import { API } from '@/services/API'
import { useQuery } from 'react-query'

const api = API.getInstance().getAPIClient()

const fetchCountryInfo = async (countryCode: string) => {
  const { data } = await api.get(`/api/country-info/${countryCode}`)
  return data
}

export const useFetchCountryInfo = (countryCode: string) => {
  return useQuery(['country-info', countryCode], () => fetchCountryInfo(countryCode))
}
