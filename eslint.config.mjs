// eslint.config.mjs

import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"
import prettier from "eslint-plugin-prettier/recommended"
import vueConfigTypescript from "@vue/eslint-config-typescript"
import vueConfigPrettier from "@vue/eslint-config-prettier"
import vitest from "@vitest/eslint-plugin"

/** @type {import('eslint').Linter.Config[]} */
export default [
   {
      languageOptions: {
         globals: {
            ...globals.browser,
            ...globals.node,
            ...vitest.environments.env.globals
         }
      }
   },
   // js
   pluginJs.configs.recommended,
   {
      rules: {}
   },
   // ts
   ...tseslint.configs.recommended,
   {
      rules: {
         "no-var": "error",
         eqeqeq: "error"
      }
   },
   // vue
   ...pluginVue.configs["flat/recommended"],
   {
      files: ["*.vue", "**/*.vue"],
      languageOptions: {
         parserOptions: {
            parser: tseslint.parser
         }
      }
   },
   {
      rules: {
         ...vueConfigTypescript.rules,
         ...vueConfigPrettier.rules,
         "prettier/prettier": [
            "warn",
            {
               singleQuote: true
            }
         ],
         "vue/multi-word-component-names": "off",
         "vue/no-v-html": "off"
      }
   },
   {
      ignores: ["node_modules", ".nuxt", ".output", "dist"]
   },
   // prettier
   prettier,
   {
      rules: {
         "prettier/prettier": ["warn", { singleQuote: false }]
      }
   }
]
