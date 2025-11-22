import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

const nodeGlobals = globals.node || {};
const jestGlobals = {
  jest: 'readonly',
  describe: 'readonly',
  test: 'readonly',
  expect: 'readonly',
  beforeEach: 'readonly',
  afterEach: 'readonly',
  it: 'readonly'
};

export default defineConfig([
  // Base: Node environment globals for all JS files
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: nodeGlobals }
  },
  // Ensure CommonJS parsing for plain .js files
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  // Tests: enable Jest globals to avoid false-positive `no-undef` errors
  {
    files: ["**/Tests/**/*.js", "**/*.test.js", "src/**/__tests__/**/*.js"],
    languageOptions: { globals: { ...nodeGlobals, ...jestGlobals } }
  }
]);
