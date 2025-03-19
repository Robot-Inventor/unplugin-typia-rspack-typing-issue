import { config, configs as tseslintConfigs } from "typescript-eslint";

const eslintConfigNoJSDoc = config(...tseslintConfigs.recommendedTypeChecked, {
    languageOptions: {
        parserOptions: {
            projectService: true
        }
    }
});

export default eslintConfigNoJSDoc;
