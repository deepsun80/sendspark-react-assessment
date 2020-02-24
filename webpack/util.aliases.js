const tsconfig = require('../tsconfig.json')
const fspath = require('path')

const aliases = Object.keys(tsconfig.compilerOptions.paths)

const webpack = aliases.reduce((acc, alias) => {
  const path = tsconfig.compilerOptions.paths[alias][0]

  const resolvedAlias = alias.replace('*', '')
  const resolvedPath = fspath.resolve(__dirname, './../', path).replace('*', '')

  return Object.assign(acc, {[resolvedAlias]: resolvedPath})
}, {})

module.exports = {
  webpack: webpack,
}
