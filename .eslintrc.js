module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["import", "jest"],
  extends: ["eslint:recommended", "plugin:import/errors", "plugin:import/warnings", "plugin:jest/recommended"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".json"],
        moduleDirectory: ["node_modules", "src"],
      }
      // if you use babel/webpack aliases, configure corresponding resolver here
    },
  },
  rules: {
    // project-wide rules (tweak as needed)
    "no-console": "off",
    "import/no-unresolved": "error",
  },
  overrides: [
    {
      files: ["**/Tests/**/*.js", "**/*.test.js", "src/**/__tests__/**/*.js"],
      env: { jest: true, node: true },
      plugins: ["jest"],
      rules: {
        // relax import/no-unresolved in tests if moduleNameMapper or aliases are used
        "import/no-unresolved": "off",
        // jest provides globals
        "no-undef": "off"
      },
    },
    {
      files: ["**/*.ejs"],
      parser: "espree",
      rules: {
        // allow inline scripts in EJS templates if needed
      },
    },
  ],
};