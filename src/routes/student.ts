import { Router } from 'express'

import { generateToken } from '@/security/generateToken'
import passport from '@/security/passportForStudent'

const router = Router()

router.post('/login', passport.authenticate('local', { session: false }), (req, res, next) => {
  try {
    const user = req.user
    const payload = { user }
    const token = generateToken(payload)
    res.json({ user, token })
  } catch (error) {
    next(error)
  }
})

export default router
