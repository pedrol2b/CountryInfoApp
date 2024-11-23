import { type NextFunction, type Request, type Response } from 'express'

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  console.error(err.stack)
  res.status(500).send('Something went wrong. Please try again later.')
}

export { errorHandler }
