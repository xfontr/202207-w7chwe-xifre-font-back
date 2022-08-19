/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/index.ts",
    "!src/loadApp.ts",
    "!src/server/startServer.ts",
    "!src/database/connectDB.ts",
    "!src/loadEnvironment.ts",
  ],
};
