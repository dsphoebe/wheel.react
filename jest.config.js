// https://jestjs.io/docs/en/configuration.html

module.exports = {
  verbose: true,
  clearMocks: false,
  collectCoverage: false,
  reporters: ["default", "jest-junit"], // jest-junit 报告测试结果
  
  collectCoverage: true,
  collectCoverageFrom: ["lib/**/*.{ts,tsx}", "!**/node_modules/**"],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"], // text 控制台，lcov 很著名的一个分析报告
  
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleDirectories: ["node_modules"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.test.json",
      "diagnostics": false
    },
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/__mocks__/file-mock.js",
    "\\.(css|scss|sass|less)$": "<rootDir>/test/__mocks__/object-mock.js",
  },
  testMatch: ["<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)"],
  transform: {
    "^.+unit\\.(js|jsx)$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>test/setupTests.js"]
}