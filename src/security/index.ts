import { Strategy as JWTStrategy, ExtractJwt, StrategyOptions } from 'passport-jwt'

import { auth } from '@/config/auth'

export const strategyConfig = {
  usernameField: 'username',
  passwordField: 'password',
  session: false,
}

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: auth.jsonWebTokenSecret,
}

export const jwtStrategy = new JWTStrategy(options, (jtw_payload: any, done: any) => {
  done(null, jtw_payload)
})
