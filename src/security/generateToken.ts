import { Express } from 'express'

import jwt from 'jsonwebtoken'

import { auth } from '@/config/auth'

interface ITokenGenerator {
  jwtSign: typeof jwt.sign
  secret: string
}

const defaultGenerator: ITokenGenerator = {
  jwtSign: jwt.sign,
  secret: auth.jsonWebTokenSecret as string,
}

export const generateToken = (
  payload: Express.User,
  { jwtSign, secret }: ITokenGenerator = defaultGenerator,
): string =>
  jwtSign(payload, secret, {
    expiresIn: '1m',
  })
