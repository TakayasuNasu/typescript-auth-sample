import { Express, Request, Response, NextFunction } from 'express'

import jwt from 'jsonwebtoken'

import { auth } from '@/config/auth.ts'

const makeJsonWebToken = (payload: Express.User): string =>
  jwt.sign(payload, auth.jsonWebTokenSecret as string, {
    expiresIn: '1m',
  })

/**
 * To generate a JWT token for an authenticated user
 */
export function generateToken(req: Request, res: Response, next: NextFunction) {
  generateJsonWebToken(req, res, next, makeJsonWebToken)
}

export function generateJsonWebToken(
  req: Request,
  res: Response,
  next: NextFunction,
  collback: (payload: Express.User) => string,
) {
  try {
    const user = req.user
    const payload = { user }
    const token = collback(payload)
    res.json({ user, token })
  } catch (error) {
    next(error)
  }
}
