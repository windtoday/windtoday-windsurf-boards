'use strict'

const directory = require('..')
const should = require('should')

describe('directory', function () {
  it('under non detection, output is the string input', function () {
    const result = directory('foo')
    should(result).be.eql({
      data: {},
      output: 'foo'
    })
  })

  it('only detect brand', function () {
    const result = directory('starboard')
    should(result).be.eql({
      data: { brand: 'Starboard' },
      output: ''
    })
  })

  it('detect brand and model', function () {
    const result = directory('vendo tabla starboard futura')
    should(result).be.eql({
      data: {
        modality: 'Freerace',
        brand: 'Starboard',
        model: 'Futura'
      },
      output: 'vendo tabla  '
    })
  })

  it('case insensitive', function () {
    should(directory('jp australia radical thruster quad')).be.eql({
      data: {
        brand: 'JP Australia',
        modality: 'Wave',
        model: 'Quad'
      },
      output: ' radical thruster '
    })
  })
})
