import { describe, it, expect } from 'vitest'

import { verify } from '../../security/passportForStudent'

describe('verify function', () => {
  it('returns true for correct username and password', () => {
    const result = verify('hoge', 'fuga')
    expect(result).toBe(true)
  })
})
