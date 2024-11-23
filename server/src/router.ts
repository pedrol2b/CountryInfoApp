/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'

import { CountryController } from './controllers/CountryController'
import { errorHandler } from './middlewares/errorHandler'

const countryController = new CountryController()

const router = Router()

router.get('/available-countries', countryController.listAvailable)
router.get('/country-info/:countryCode', countryController.getInfo)

router.get('/countries-population', countryController.listPopulation)
router.get('/countries-flag-images', countryController.listFlagImages)

router.use(errorHandler)

export { router }
