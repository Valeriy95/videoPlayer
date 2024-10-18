import globals from "globals";
import pluginJs from "@eslint/js";
import prettierConfig from "eslint-config-prettier"; // Для отключения конфликтующих с Prettier правил

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: 2021,
      sourceType: "module",
    },
    rules: {
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "eqeqeq": "error",
      "prettier/prettier": ["error"],
    },
  },
  pluginJs.configs.recommended,
  prettierConfig,
];
