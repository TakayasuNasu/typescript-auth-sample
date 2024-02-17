import { ExtractJwt } from 'passport-jwt'

export const auth = {
  extractJwt: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secret: process.env.JWT_SECRET,
}
