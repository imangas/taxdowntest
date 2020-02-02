module.exports = {
    moduleFileExtensions: [
      'js',
    ],
    transformIgnorePatterns: [
      '/node_modules/',
    ],
    testMatch: [
      '<rootDir>/tests/**/*.spec.(js|jsx|ts|tsx)',
    ],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1',
    },
    testURL: 'http://localhost:3000/',
    collectCoverageFrom: [
      "<rootDir>/**/entities*.{js,jsx}",
      "<rootDir>/handler*.{js,jsx}",
    ],
    roots: ["<rootDir>"]
  };