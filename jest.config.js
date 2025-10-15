const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    ...tsJestTransformCfg,
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts"],
  coverageReporters: ["text", "lcov"],
  moduleNameMapper: {
    "^shared/(.*)$": "<rootDir>/src/shared/$1",
    "^entities/(.*)$": "<rootDir>/src/entities/$1",
    "^features/(.*)$": "<rootDir>/src/features/$1",
    "^widgets/(.*)$": "<rootDir>/src/widgets/$1",
    "^pages/(.*)$": "<rootDir>/src/pages/$1",
    "^app/(.*)$": "<rootDir>/src/app/$1",
  },
};
