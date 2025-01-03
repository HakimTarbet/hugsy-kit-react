module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(ts|tsx)$': 'babel-jest'
    },
    moduleNameMapper: {
      '\\.(css|scss)$': '<rootDir>/jest.mock.js'
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    transformIgnorePatterns: ['/node_modules/'],
    coveragePathIgnorePatterns: [
      "/node_modules/",
      "\\.styles\\.ts$",
      "\\.mock\\.js$",
      "\\.mock\\.ts$",
      "\\.dto\\.ts$",
    ],
}