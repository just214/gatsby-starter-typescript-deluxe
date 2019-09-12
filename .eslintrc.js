//***********************************************************
// * 0 = off | 1 = warn | 2 = error
//***********************************************************
module.exports = {
  extends: ["gojutin"],
  rules: {
    // This rule is triggered by styled components with no props or interface.
    "@typescript-eslint/explicit-function-return-type": 0,
  },
};
