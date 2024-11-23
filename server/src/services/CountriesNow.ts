/* eslint-disable @typescript-eslint/consistent-type-definitions */
import axios, { type AxiosInstance, type CreateAxiosDefaults } from 'axios'

type CountriesPopulationResponse = {
  error: boolean
  msg: string
  data: Array<{
    country: string
    code: string
    iso3: string
    populationCounts: Array<{
      year: number
      value: number
    }>
  }>
}

type CountriesFlagImagesResponse = {
  error: boolean
  msg: string
  data: Array<{
    name: string
    flag: string
    iso2: string
    iso3: string
  }>
}

// type CountryFlagResponse = {
//   error: boolean
//   msg: string
//   data: {
//     name: string
//     flag: string
//     iso2: string
//     iso3: string
//   }
// }

class CountriesNow {
  static defaultTimeout = 15000

  private readonly client: AxiosInstance

  constructor(config?: CreateAxiosDefaults) {
    this.client = axios.create({
      baseURL: 'https://countriesnow.space/api/v0.1',
      timeout: CountriesNow.defaultTimeout,
      ...config,
    })
  }

  async getCountriesPopulation(): Promise<CountriesPopulationResponse> {
    try {
      const response = await this.client.get<CountriesPopulationResponse>('/countries/population')
      return response.data
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async getCountriesFlagImages(): Promise<CountriesFlagImagesResponse> {
    try {
      const response = await this.client.get<CountriesFlagImagesResponse>('/countries/flag/images')
      return response.data
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  // NOTE: Docs don`t seen to be updated and the example request with cURL is not working
  // https://documenter.getpostman.com/view/1134062/T1LJjU52#d5fa7209-3bf9-4a24-be50-94d84192b1a6
  // async getCountryFlag(iso2: string): Promise<CountryFlagResponse> {
  //   try {
  //     const response = await this.client.post<CountryFlagResponse>('/countries/flag', { iso2 })
  //     return response.data
  //   } catch (error) {
  //     console.error(error)
  //     throw error
  //   }
  // }
}

export { CountriesNow }
