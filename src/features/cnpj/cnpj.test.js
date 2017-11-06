import assert from 'assert'

import CNPJ from './cnpj'

const validCNPJs = [
  {
    raw: '02003313000129',
    formatted: '02.003.313/0001-29'
  },
  {
    raw: '47461227000106',
    formatted: '47.461.227/0001-06'
  }
]

const invalidCNPJs = [
  '99.999.999-1111/29',
  '11111111111125'
]

describe('CNPJ', () => {
  describe('Validation', () => {

    it('should validate a real CNPJ', () => {
      validCNPJs.map(({ formatted, raw }) => {
        assert(CNPJ.validate(formatted) == true)
        assert(CNPJ.validate(raw) == true)
      })
    })

    it('should invalidate a fake CNPJ', () => {
      invalidCNPJs.map(invalidCNPJ => assert(CNPJ.validate(invalidCNPJ) == false))
    })

  })

  describe('Formatting', () => {

    it('should format a CNPJ', () => {
      validCNPJs.map(({ raw, formatted }) => assert(CNPJ.format(raw) == formatted))
    })

  })
})