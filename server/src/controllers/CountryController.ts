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

      const countryInfo = await this.dateNager.getCountryInfo(countryCode)
      res.send(countryInfo)
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
