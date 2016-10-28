'use strict'

var directory = require('..')
require('should')

describe('directory', function () {
  it('nothing to detect', function () {
    directory('').should.be.eql({})
  })

  it('only detect brand', function () {
    directory('starboard').should.be.eql({
      brand: 'Starboard'
    })
  })

  it('detect brand and model', function () {
    directory('starboard futura').should.be.eql({
      brand: 'Starboard',
      model: 'Futura'
    })
  })
})
