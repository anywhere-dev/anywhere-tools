import validateCPF from './validate-cpf'
import assert from 'assert'

const validCPFs = [
  '659.123.648-10',
  '734.236.504-19',
  '083.235.342-68',
  '42567044850'
]
const invalidCPFs = [
  '021.021.021-45',
  '676.856.157-59',
  '546.454.546-34',
  '25452145875'
]

describe('CPF', () => {
  describe('validateCPF()', () => {
    it('should validate a real CPF', () => {
      validCPFs.map(validCPF => assert(validateCPF(validCPF) == true))
    })

    it('should invalidate a fake CPF', () => {
      invalidCPFs.map(invalidCPF => assert(validateCPF(invalidCPF) == false))
    })
  })
})