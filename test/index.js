'use strict'

var directory = require('..')
require('should')

describe('directory', function () {
  it('nothing to detect', function () {
    const { board } = directory('')
    board.should.be.eql({})
  })

  it('only detect brand', function () {
    const { board } = directory('starboard')
    board.should.be.eql({
      brand: 'Starboard'
    })
  })

  it('detect brand and model', function () {
    const {board, output} = directory('vendo tabla starboard futura')

    board.should.be.eql({
      brand: 'Starboard',
      model: 'Futura'
    })

    output.should.be.equal('vendo tabla  ')
  })
})
