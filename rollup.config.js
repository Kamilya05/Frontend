import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from "@rollup/plugin-node-resolve";
export default {
	input: 'src/comic.ts',
	output: {
		file: 'dist/comic.js'
	},
	external: [/node_modules/],
    plugins: [
		nodeResolve(),
		typescript(),
	]
};