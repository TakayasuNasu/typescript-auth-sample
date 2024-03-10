import { describe, it, expect, vi } from 'vitest'

import { generateToken } from '../../security/generateToken'

describe('generateToken', () => {
  it('should generate a token using provided payload and secret', () => {
    const mockJwtSign = vi.fn().mockImplementation(() => 'mockToken')
    const payload = { id: '123', username: 'testUser' }
    const secret = 'testSecret'
    const token = generateToken(payload, { jwtSign: mockJwtSign, secret })
    expect(token).toBe('mockToken')
    expect(mockJwtSign).toHaveBeenCalledWith(payload, secret, { expiresIn: '1m' })
  })
})
