import CPF from './cpf'
import assert from 'assert'

const validCPFs = [
  {
    raw: '65912364810',
    formatted: '659.123.648-10'
  },{
    raw: '73423650419',
    formatted: '734.236.504-19'
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
      validCPFs.map(({ formatted, raw }) => {
        assert(CPF.validate(formatted) == true)
        assert(CPF.validate(raw) == true)
      })
    })

    it('should invalidate a fake CPF', () => {
      invalidCPFs.map(invalidCPF => assert(CPF.validate(invalidCPF) == false))
    })

  })

  describe('Formatting', () => {

    it('should format a CPF', () => {
      validCPFs.map(({ raw, formatted }) => assert(CPF.format(raw) == formatted))
    })

  })
})