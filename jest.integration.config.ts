import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
  testPathIgnorePatterns: ['/src/'],
  preset: 'ts-jest',
  setupFiles: ['<rootDir>/.integration.test-build.env'],
  verbose: true
}

export default config
