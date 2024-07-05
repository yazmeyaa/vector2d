import { defineConfig } from "vite";
import path from "path";
import dts from 'vite-plugin-dts';

const libConfig = defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            fileName: "index",
            name: 'vector2d'
        },
    },
    plugins: [dts({exclude: "**/*.test.ts"})],
});

export default libConfig
