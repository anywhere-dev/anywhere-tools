import validateCNPJ from './validate-cnpj'
import assert from 'assert'

const validCNPJs = [
  '02.003.313-0001/29',
  '47.461.227/0001-06',
  '53.288.737/0001-18',
  '02003313000129']
const invalidCNPJs = [
  '99.999.999-1111/29',
  '11111111111125'
]

describe('CNPJ', () => {
  describe('validateCNPJ()', () => {
    it('should validate a real CNPJ', () => {
      validCNPJs.map(validCNPJ => assert(validateCNPJ(validCNPJ) == true))
    })

    it('should invalidate a fake CNPJ', () => {
      invalidCNPJs.map(invalidCNPJ => assert(validateCNPJ(invalidCNPJ) == false))
    })
  })
})