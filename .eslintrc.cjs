/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  plugins: ["turbo"],
  parserOptions: {
    ecmaVersion: "latest",
  },
};

module.exports = config;
