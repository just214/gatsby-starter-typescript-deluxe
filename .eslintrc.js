module.exports = {
  extends: [
    "react-app", // See below
    "plugin:functional/recommended",
    "plugin:prettier/recommended", // Should always be last. Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ["functional"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off", // This rule prevents you from letting React component return types be inferred.
    "functional/no-expression-statement": "off", // This rule causes an error with ReactDOM.render()
    "functional/prefer-readonly-type": "off", // Off for now. Do we want to have to annotate everything with readonly? To be discussed.
    "functional/functional-parameters": "off", // This rule breaks things like the useEffect, which takes a callback with no parameters.
    "functional/no-mixed-type": "off", // This rules doesn't allow you to create a type alias for a component that mixes methods and values.
    "functional/prefer-type-literal": "off", // Interfaces are fine. Some people prefer to extend.
    "functional/no-conditional-statement": "off", // if statements are useful and quite nice for conditional component rendering logic.
    "functional/no-return-void": "off", // In React, you are often returning void. i.e. useState setters
    "functional/no-try-statement": "off", // What's wrong with a try/catch? They are very useful with async/await.
  },
};

/**
 * eslint-config-react-app
 * Docs:
 * https://www.npmjs.com/package/eslint-config-react-app
 *
 * Source:
 * https://github.com/facebook/create-react-app/blob/master/packages/eslint-config-react-app/index.js
 * This is a default eslint configuration created and maintained the Facebook team,
 * primarily for use with create-react-app.
 * This default configuration is well thought-out and actively maintained. It includes sensible rules for
 * React-specific apps, including hooks usage. It also includes accessibility rules via react-a11y as
 * well as rules for import statements and a few other niceties.
 */
