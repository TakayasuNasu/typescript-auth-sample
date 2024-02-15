import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'

passport.use(
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      session: false,
    },
    (username: string, password: string, done: any) => {
      if (username === 'hoge' && password === 'fuga') {
        return done(null, username)
      } else {
        return done(null, false, {
          message: 'username or password was incorrect',
        })
      }
    },
  ),
)
