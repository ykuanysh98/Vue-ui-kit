import { describe, it, expect } from 'vitest'
import { formatMoney } from './formatMoney'

describe('formatMoney utility test', () => {
  const sanitizeSpace = (str) => str.replace(/\s/g, ' ')

  it('formats regular amounts correctly with Russian locale spacing', () => {
    expect(sanitizeSpace(formatMoney(1000))).toBe('1 000')
    expect(sanitizeSpace(formatMoney(1234567.89))).toBe('1 234 567.89')
  })

  it('formats string amounts correctly', () => {
    expect(sanitizeSpace(formatMoney('5000'))).toBe('5 000')
  })

  it('returns "0" for invalid/non-numeric values', () => {
    expect(formatMoney('not-a-number')).toBe('0')
    expect(formatMoney(undefined)).toBe('0')
  })
})
