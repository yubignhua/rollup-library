import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.tsx', // 您的入口文件
  output: [
    {
      file: 'dist/index.js', // 输出文件的路径和名称
      format: 'cjs', // 输出格式，这里是CommonJS
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm', // ES模块格式
      sourcemap: true,
    },
  ],
  plugins: [
    typescript(),
    babel({
      exclude: 'node_modules/**', // 只编译我们的源代码
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-react'], // 确保你的 Babel 配置包含 @babel/preset-react
    }),
    peerDepsExternal(),
    resolve(),
    commonjs(),

    terser(), // 压缩输出的代码
  ],
  external: ['react', 'react-dom'], // 声明外部依赖，这些依赖不会被打包
}
