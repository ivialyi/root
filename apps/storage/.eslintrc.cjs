/** @type {import('eslint').Linter.Config} */
const config = {
  plugins: ["solid"],
  extends: [
    "../../.eslintrc.cjs",
    "plugin:solid/recommended",
    "plugin:tailwindcss/recommended",
  ],
  overrides: [
    { files: ["*.ts", "*.tsx"], parser: "@typescript-eslint/parser" },
  ],
};

module.exports = config;
