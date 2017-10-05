import CPF from './cpf'
import assert from 'assert'

const validCPFs = [
  {
    denormalized: '65912364810',
    normalized: '659.123.648-10'
  },{
    denormalized: '73423650419',
    normalized: '734.236.504-19'
  }
]
const invalidCPFs = [
  '021.021.021-45',
  '676.856.157-59',
  '546.454.546-34',
  '25452145875'
]

describe('CPF', () => {
  describe('Validation', () => {

    it('should validate a real CPF', () => {
      validCPFs.map(({ normalized, denormalized }) => {
        assert(CPF.validate(normalized) == true)
        assert(CPF.validate(denormalized) == true)
      })
    })

    it('should invalidate a fake CPF', () => {
      invalidCPFs.map(invalidCPF => assert(CPF.validate(invalidCPF) == false))
    })

  })

  describe('Normalization', () => {

    it('should normalize a CPF', () => {
      validCPFs.map(({ denormalized, normalized }) => assert(CPF.normalize(denormalized) == normalized))
    })

  })
})