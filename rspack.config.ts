import { defineConfig } from "@rspack/cli";
import unPluginTypia from "@ryoppippi/unplugin-typia/rspack";

const isProduction = process.env["NODE_ENV"] === "production";

const config = defineConfig({
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? false : "source-map",
    entry: {
        "index.js": "./src/index.ts"
    },
    output: {
        filename: "[name]",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.ts$/u,
                exclude: [/node_modules/u],
                loader: "builtin:swc-loader",
                options: {
                    // Ref: https://github.com/lit/lit/issues/4580#issuecomment-1996733777
                    jsc: {
                        parser: {
                            syntax: "typescript"
                        }
                    }
                },
                type: "javascript/auto"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [
        unPluginTypia({
            cache: true
        })
    ]
});

export default config;
