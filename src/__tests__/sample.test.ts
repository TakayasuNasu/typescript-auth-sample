import { describe, it, expect } from 'vitest'

describe('add', () => {
  it('should add two numbers', () => {
    const add = (a: number, b: number) => {
      return a + b
    }
    expect(add(1, 2)).toBe(3)
  })
})
