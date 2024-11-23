/**
 * Registers the tsconfig-paths module to enable path mapping for TypeScript.
 */
const tsConfigPaths = require('tsconfig-paths')

/**
 * Loads the TypeScript configuration from the tsconfig.json file.
 */
const tsConfig = require('../tsconfig.json')

/**
 * Registers the tsconfig-paths module with the provided configuration.
 */
const baseUrl = 'dist'
const cleanup = tsConfigPaths.register({
  baseUrl,
  paths: tsConfig.compilerOptions.paths,
})
