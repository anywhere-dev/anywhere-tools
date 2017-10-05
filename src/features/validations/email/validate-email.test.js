import validateEmail from './validate-Email'
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

describe('Email', () => {
  describe('validateEmail()', () => {
    it('should validate a real Email', () => {
      validEmails.map(validEmail => assert(validateEmail(validEmail) == true))
    })

    it('should invalidate a fake Email', () => {
      invalidEmails.map(invalidEmail => assert(validateEmail(invalidEmail) == false))
    })
  })
})