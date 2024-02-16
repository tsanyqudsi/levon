// vite.config.js
import { defineConfig } from "vite";
import pkg from "./package.json";
import dts from "vite-plugin-dts";

export default defineConfig({
	plugins: [dts()],
	build: {
		lib: {
			entry: "src/index.ts",
			name: pkg.name,
			fileName: "index",
		},
		rollupOptions: {
			// Externalize dependencies that shouldn't be bundled into the library
			external: ["react", "react-dom"],
			output: {
				extend: true,
				// Global variable name for UMD bundle (if you're targeting UMD)
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
		minify: true,
	},
});
