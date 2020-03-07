// https://eslint.org/docs/user-guide/configuring
// const rules = require('./eslint/rules');
module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    // mocha: true,
    es6: true,
    node: true,
    amd: true,
    // jasmine: false
  },
  globals: {
    describe: false,
    it: false,
    afterEach:false,
    globalVariable: false,
    AMap: false
  },
  extends: [
    'eslint:recommended',
  ],
  // required to lint *.vue files
  plugins: [
    "html",
    "import",
    "json",
    "node",
    "promise",
    "vue"
  ],
  // add your custom rules here
  rules: {}
};
