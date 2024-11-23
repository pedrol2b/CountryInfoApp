import 'express-async-errors'
import cors from 'cors'
import * as dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

import { router } from './router'

const PORT = process.env.PORT ?? 3000

dotenv.config()

const app = express()
app.enable('trust proxy')
app.disable('x-powered-by')
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/api', router)

const onListen = (): void => {
  console.log(`Server is running on http://localhost:${PORT}`)
}

app.listen(PORT, onListen)
