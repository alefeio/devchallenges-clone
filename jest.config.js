const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Forneça o caminho para seu aplicativo Next.js
  dir: './',
})

// Adicione qualquer configuração personalizada que você queira
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/']
}

module.exports = createJestConfig(customJestConfig) 