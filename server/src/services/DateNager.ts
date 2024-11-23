/* eslint-disable @typescript-eslint/consistent-type-definitions */
import axios, { type AxiosInstance, type CreateAxiosDefaults } from 'axios'

type AvailableCountriesResponse = Array<{ countryCode: string; name: string }>

type CountryInfoResponse = {
  commonName: string
  officialName: string
  countryCode: string
  region: string
  borders: Array<{
    commonName: string
    officialName: string
    countryCode: string
    region: string
    borders: unknown
  }>
}

class DateNager {
  static defaultTimeout = 15000

  private readonly client: AxiosInstance

  constructor(config?: CreateAxiosDefaults) {
    this.client = axios.create({
      baseURL: 'https://date.nager.at/api/v3',
      timeout: DateNager.defaultTimeout, // Use the static property
      ...config,
    })
  }

  async getAvailableCountries(): Promise<AvailableCountriesResponse> {
    try {
      const response = await this.client.get<AvailableCountriesResponse>('/AvailableCountries')
      return response.data
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async getCountryInfo(countryCode: string): Promise<CountryInfoResponse> {
    try {
      const response = await this.client.get<CountryInfoResponse>(`/CountryInfo/${countryCode}`)
      return response.data
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}

export { DateNager }
