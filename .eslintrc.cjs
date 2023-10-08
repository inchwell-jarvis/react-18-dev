module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}


// 这段代码是一个 ESLint 配置文件，用于配置 JavaScript 代码的静态代码分析和规范检查。下面是对每个配置选项的解释：

// 1. `root: true`：指定这是根级 ESLint 配置文件。

// 2. `env: { browser: true, es2020: true }`：指定了代码的运行环境，包括浏览器环境和 ES2020。

// 3. `extends`：使用了一系列预定义的 ESLint 配置来扩展规则集。
//    - `'eslint:recommended'`：基本的 ESLint 规则。
//    - `'plugin:react/recommended'`：React 项目的相关规则。
//    - `'plugin:react/jsx-runtime'`：React JSX 的规则。
//    - `'plugin:react-hooks/recommended'`：React Hooks 相关规则。

// 4. `ignorePatterns`：指定了哪些文件或目录不会被 ESLint 检查，包括 "dist" 目录和 ".eslintrc.cjs" 文件。

// 5. `parserOptions`：指定了解析选项。
//    - `ecmaVersion: 'latest'`：使用最新的 ECMAScript 版本。
//    - `sourceType: 'module'`：使用 ES 模块。

// 6. `settings`：React 相关设置。
//    - `react: { version: '18.2' }`：指定 React 的版本号。

// 7. `plugins: ['react-refresh']`：引入了名为 "react-refresh" 的 ESLint 插件，该插件用于支持 React 刷新（React Refresh）特性。

// 8. `rules`：配置规则。
//    - `'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]`：这是自定义的规则，它告诉 ESLint 在开发 React 组件时只允许导出组件，允许常量导出（即 `export const`）。

// 这个配置文件的目的是确保你的代码符合一些基本的 JavaScript 和 React 编码规范，以提高代码质量和可维护性。同时，它也包括了与 React 相关的规则和支持 React Refresh 特性的设置。