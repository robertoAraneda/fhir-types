import tseslint from "typescript-eslint";
import jestPlugin from 'eslint-plugin-jest';
import eslint from "@eslint/js";

export default tseslint.config(
  {
    // config with just ignores is the replacement for `.eslintignore`
    ignores: ['**/build/**', '**/dist/**', "**/node_modules/**", "**/coverage/**"],
  },
  {
    files: ["**/*.{ts}"]
  },
  eslint.configs.recommended,
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      jest: jestPlugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
    },
    rules: {
      //"semi": ["error", "always"],
      //"quotes": ["error", "single"],
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      // to enforce using type for object type definitions, can be type or interface
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"]
    },
  },
  {
    // disable type-aware linting on JS files
    files: ["**/*.{js}"],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    // enable jest rules on test files
    files: ['test/**'],
    ...jestPlugin.configs['flat/recommended'],
  },
);
