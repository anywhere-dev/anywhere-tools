import assert from 'assert'

import CNPJ from './cnpj'

const validCNPJs = [
  {
    denormalized: '02003313000129',
    normalized: '02.003.313/0001-29'
  },
  {
    denormalized: '47461227000106',
    normalized: '47.461.227/0001-06'
  }
]

const invalidCNPJs = [
  '99.999.999-1111/29',
  '11111111111125'
]

describe('CNPJ', () => {
  describe('Validation', () => {

    it('should validate a real CNPJ', () => {
      validCNPJs.map(({ normalized, denormalized }) => {
        assert(CNPJ.validateCNPJ(normalized) == true)
        assert(CNPJ.validateCNPJ(denormalized) == true)
      })
    })

    it('should invalidate a fake CNPJ', () => {
      invalidCNPJs.map(invalidCNPJ => assert(CNPJ.validateCNPJ(invalidCNPJ) == false))
    })

  })

  describe('Normalization', () => {

    it('should normalize a CNPJ', () => {
      validCNPJs.map(({ denormalized, normalized }) => assert(CNPJ.normalizeCNPJ(denormalized) == normalized))
    })

  })
})