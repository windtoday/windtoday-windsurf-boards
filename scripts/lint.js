'use strict'

var isEqual = require('json-is-equal')
var sortKeys = require('sort-keys-recursive')
var jsonFuture = require('json-future')
var lodash = require('lodash')
var files = require('..')

lodash.forEach(files, function (file, filename) {
  var sorted = sortKeys(file)
  sorted.models = lodash.sortBy(sorted.models, 'name')
  if (!isEqual(file, sorted)) throw new Error('File is not sorted.')
})
