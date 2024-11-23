import { type NextFunction, type Request, type Response } from 'express'

import { CountriesNow } from '../services/CountriesNow'
import { DateNager } from '../services/DateNager'

class CountryController {
  private readonly countriesNow: CountriesNow
  private readonly dateNager: DateNager

  constructor() {
    this.countriesNow = new CountriesNow()
    this.dateNager = new DateNager()
  }

  listAvailable = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const countries = await this.dateNager.getAvailableCountries()
      res.send(countries)
    } catch (error) {
      next(error)
    }
  }

  getInfo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const countryCode = req.params.countryCode

      if (!countryCode) {
        res.status(400).send('Country code is required')
        return
      }

      const { borders, commonName: countryName } = await this.dateNager.getCountryInfo(countryCode)

      const populationPromise = this.countriesNow.getCountriesPopulation()
      const flagImagesPromise = this.countriesNow.getCountriesFlagImages()

      // HACK: added a note in `countriesNow` explaining this,
      // the POST request that should be used to get the country information is not working, at least not in the postman example
      const [populationData, flagImagesData] = await Promise.all([populationPromise, flagImagesPromise])

      const population = populationData.data.find(
        (country: { country: string }) => country.country.toLowerCase() === countryName.toLowerCase(),
      )

      const flagImage = flagImagesData.data.find((country: { iso2: string }) => country.iso2 === countryCode)
      const flag = flagImage ? flagImage.flag : null

      res.send({
        countryName,
        flag,
        borders,
        population: population?.populationCounts ?? [],
      })
    } catch (error) {
      next(error)
    }
  }

  listPopulation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const population = await this.countriesNow.getCountriesPopulation()
      res.send(population)
    } catch (error) {
      next(error)
    }
  }

  listFlagImages = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const flagImages = await this.countriesNow.getCountriesFlagImages()
      res.send(flagImages)
    } catch (error) {
      next(error)
    }
  }
}

export { CountryController }
