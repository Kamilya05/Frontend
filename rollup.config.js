// import typescript from 'rollup-plugin-typescript2';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
export default {
	input: 'src/comic.ts',
	output: {
		file: 'dist/comic.js',
		format: 'es',
	},
    plugins: [
		resolve({ browser: true }),
		commonjs(),
		typescript()
	  ]
};