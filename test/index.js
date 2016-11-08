'use strict'

var directory = require('..')
require('should')

describe('directory', function () {
  describe('detection', function () {
    it('nothing to detect', function () {
      const { data } = directory('')
      data.should.be.eql({})
    })

    it('only detect brand', function () {
      const { data } = directory('starboard')
      data.should.be.eql({
        brand: 'Starboard'
      })
    })

    it('detect brand and model', function () {
      const {data} = directory('vendo tabla starboard futura')
      data.should.be.eql({
        brand: 'Starboard',
        model: 'Futura'
      })
    })
  })

  describe('output', function () {
    it('remove brand', function () {
      const { output } = directory('vendo tabla starboard')
      output.should.be.equal('vendo tabla ')
    })

    it('remove brand and model', function () {
      const { output } = directory('vendo tabla starboard futura')
      output.should.be.equal('vendo tabla  ')
    })
  })
})
