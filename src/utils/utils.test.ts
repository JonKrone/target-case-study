import { capitalize } from './utils'

describe('utils', () => {
  describe('capitalize', () => {
    it('capitalizes', () => {
      expect(capitalize('NORTHBOUND')).toBe('Northbound')
    })
  })
})
