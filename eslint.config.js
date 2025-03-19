import { config, configs as tseslintConfigs } from "typescript-eslint";
import eslint from "@eslint/js";

const eslintConfigNoJSDoc = config(eslint.configs.recommended, ...tseslintConfigs.recommendedTypeChecked, {
    languageOptions: {
        parserOptions: {
            projectService: true
        }
    }
});

export default eslintConfigNoJSDoc;
