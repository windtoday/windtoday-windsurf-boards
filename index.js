'use strict'

const directory = require('req-all')('./lib/dir')
const findBrand = require('./lib/find-brand')
const findModel = require('./lib/find-model')
const get = require('lodash.get')

function dir (str, opts) {
  const board = {}
  const {brand, brandData} = findBrand(directory, str, opts)

  if (!brand) return {board}
  board.brand = get(brand, 'brand.name')

  const models = get(brand, 'models')
  const {model, modelData} = findModel(models, brandData.output, opts)

  if (!model) return {board, output: brandData.output}
  board.model = get(model, 'name')

  return {board, output: modelData.output}
}

module.exports = dir
