// @rollup/plugin-node-resolve：允许 Rollup 识别 node_modules 中的包
// @rollup/plugin-commonjs：将 CommonJS 模块转换为 ES6
// @rollup/plugin-babel：让 Rollup 使用 Babel 处理代码
// @rollup/plugin-replace: 用于在打包时替换代码中的一些变量，可用于设置 process.env 等
// rollup-plugin-less：处理 Ant Design 的 Less 样式，按需加载样式
// babel-plugin-import：用于实现按需加载

import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import replace from '@rollup/plugin-replace'
import less from 'rollup-plugin-less'

export default {
  input: 'src/index.tsx', // 您的入口文件
  output: [
    {
      file: 'dist/index.js', // 输出文件的路径和名称
      // format: 'cjs', // 输出格式，这里是CommonJS
      format: 'umd', // 格式化umd
      // sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm', // ES模块格式
      sourcemap: true,
    },
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
    }),
    postcss({
      extensions: ['.css'],
    }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript(),
    less({
      output: 'dist/bundle.css' // 指定打包后的样式文件路径
    })
    //     babel({
    //       exclude: 'node_modules/**', // 只编译我们的源代码
    //       babelHelpers: 'bundled',
    //       presets: ['@babel/preset-env', '@babel/preset-react'], // 确保你的 Babel 配置包含 @babel/preset-react
    //     }),
    babel({
      exclude: 'node_modules/**', // 只编译我们的源代码
      babelHelpers: 'bundled',
      presets: [
        '@babel/preset-env', // 允许你使用最新的 JavaScript 功能
        '@babel/preset-react', // 允许你使用 JSX 语法
        '@babel/preset-typescript', // 允许你使用 TypeScript
      ],
    }),

    terser(), // 压缩输出的代码
  ],
  external: ['react', 'react-dom'], // 声明外部依赖，这些依赖不会被打包
}
