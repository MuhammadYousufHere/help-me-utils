import { expect } from 'chai'
import { toTitle } from '../string.js'

describe('toTile():', function () {
  describe('test for exceptions', function () {
    it('should only accept the string type as argument', function () {
      expect(() => toTitle(213)).to.throw(
        Error,
        'toTitle only accepts a string as an argument.'
      )
    })
  })
  describe('test for correct result', function () {
    it('should return title case string when a string is passed as argument', function () {
      const ex = toTitle('hello there, danny!')
      expect(ex).to.be.string('Hello There, Danny!')
    })
    it('should handle sigle word input', function () {
      const input = 'voilla!'
      const output = toTitle(input)
      expect(output).to.be.equal('Voilla!')
    })
  })
  describe('test for special string arguments', function () {
    it('should handle mixed case input', function () {
      const ex = toTitle('wHat TimE Is iT?')
      expect(ex).to.be.string('What Time Is It?')
    })
    it('should handle an empty string passed as argument', function () {
      expect(toTitle('')).to.be.string('')
    })
    it('should preserve acronyms and initialisms', function () {
      const input = 'learn HTML and CSS!'
      const output = toTitle(input)
      expect(output).to.be.equal('Learn HTML And CSS!')
    })
    it('should handle special characters and numbers', () => {
      const input = 'java-script 101'
      const result = toTitle(input)
      expect(result).to.equal('Java-script 101')
    })
  })
})
