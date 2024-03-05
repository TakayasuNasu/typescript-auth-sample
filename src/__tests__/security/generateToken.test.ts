import { Express } from 'express'

import { describe, it, expect, vi } from 'vitest'

import { generateJsonWebToken } from '@/security/generateToken'

const mockUser: Express.User = {
  id: '123',
  username: 'testUser',
}

const mockReq: any = {
  user: mockUser,
}

const mockRes: any = {
  json: vi.fn(),
}

const mockNext: any = vi.fn()

describe('generateJsonWebToken function', () => {
  it('should generate a token and send it with the user in the response', async () => {
    const mockCallback = vi.fn(() => 'jsonWebToken')
    generateJsonWebToken(mockReq, mockRes, mockNext, mockCallback)
    expect(mockCallback).toHaveBeenCalledWith({ user: mockReq.user })
  })

  it('should call next with an error if the callback throws', () => {
    const error = new Error('Callback error')
    const mockCallback = vi.fn(() => {
      throw error
    })
    generateJsonWebToken(mockReq, mockRes, mockNext, mockCallback)
    expect(mockNext).toHaveBeenCalledWith(error)
  })
})
