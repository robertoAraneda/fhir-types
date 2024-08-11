/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: false,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['src/**'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['json', 'text', 'lcov', 'clover', 'text-summary'],

  coverageThreshold: {
    global: {
      lines: 50,
      statements: 50,
      branches: 50,
      functions: 50,
    },
  },
  preset: 'ts-jest',
  // roots: ['<rootDir>/src'],

  // The test environment that will be used for testing
  testEnvironment: 'node',

  reporters: [['github-actions', { silent: false }], 'summary'],

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],

  // Indicates whether each individual test should be reported during the run
  verbose: false,

  displayName: {
    name: 'UNIT',
    color: 'blue',
  },
};

export default config;
