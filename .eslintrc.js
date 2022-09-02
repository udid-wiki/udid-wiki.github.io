const prettierConfig = require("./.prettierrc");
module.exports = {
  root: true,
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2019,
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    "import/ignore": ["node_modules", ".json$"],
  },
  rules: {},
  globals: {
    $docsify: "writable",
    Docsify: "writable",
    dom: "writable",
  },
};
