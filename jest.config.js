module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest'
    },
    moduleNameMapper: {
      '\\.(css|scss)$': '<rootDir>/jest.mock.js'
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    transformIgnorePatterns: ['/node_modules/']
}