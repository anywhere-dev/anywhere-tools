import EMAIL from './email'
import assert from 'assert'

const validEmails = [
  'bob@bob.com',
  'contato@suporte.com.br',
  'ouvidoria@sc.gov.br'
]
const invalidEmails = [
  'a',
  'as2@!hotmail.com',
  'test@',
  'invalid@@email.com',
  'invalid@email.1'
]

describe('Email ', () => {
  describe('Validation()', () => {

    it('should validate a real Email', () => {
      validEmails.map(EMAIL.validEmail => assert(validateEmail(validEmail) == true))
    })

    it('should invalidate a fake Email', () => {
      invalidEmails.map(EMAIL.invalidEmail => assert(validateEmail(invalidEmail) == false))
    })

  })
})