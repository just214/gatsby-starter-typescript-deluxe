//***********************************************************
// * 0 = off | 1 = warn | 2 = error
//***********************************************************
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    // project: "tsconfig.json",
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],

  plugins: [
    "@typescript-eslint",
    "@typescript-eslint/tslint",
    "react",
    "immutable",
    "jsx-a11y",
  ],
  rules: {
    "react/prop-types": 0, // Disable prop-types as we use TypeScript for type checking
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/no-unused-vars": 2,
    "@typescript-eslint/no-this-alias": 2,
    "@typescript-eslint/no-misused-new": 2,
    "@typescript-eslint/no-inferrable-types": 1,
    "@typescript-eslint/no-extraneous-class": 2,
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/no-empty-interface": 1,
    "@typescript-eslint/prefer-interface": 0,
    strict: 2,
    "no-var": 2,
    "prefer-const": 2,
    "no-undef": 2,
    "no-param-reassign": 2,
    "immutable/no-let": 2,
    "immutable/no-this": 2,
    "immutable/no-mutation": 2,
    "sort-keys": 2,
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};
