import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'

import { strategyConfig, jwtStrategy } from '.'

passport.use(
  new LocalStrategy(strategyConfig, (username: string, password: string, done: any) => {
    if (verify(username, password)) {
      return done(null, username)
    } else {
      return done(null, false, {
        message: 'username or password was incorrect',
      })
    }
  }),
)

export function verify(username: string, password: string) {
  if (username === 'hoge' && password === 'fuga') {
    return true
  } else {
    return false
  }
}

passport.use(jwtStrategy)

export default passport
