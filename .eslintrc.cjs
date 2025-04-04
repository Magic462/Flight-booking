module.exports = {
  env: {
    browser: true, // 如果你的代码会在浏览器中运行
    node: true, // 如果你的代码会在 Node.js 环境中运行
  },
  // 使用 ESLint 的解析器
  parser: '@typescript-eslint/parser',
  // 扩展的规则集
  extends: [
    'eslint:recommended', // 使用 ESLint 推荐的规则
    'plugin:react/recommended', // 使用 React 推荐的规则
    'plugin:@typescript-eslint/recommended', // 使用 TypeScript 推荐的规则
    'plugin:prettier/recommended', // 使用 Prettier 规则
  ],
  // 解析选项
  parserOptions: {
    ecmaVersion: 2020, // 支持 ES2020
    sourceType: 'module', // 使用模块
    ecmaFeatures: {
      jsx: true, // 支持 JSX
    },
  },
  // 自定义规则
  rules: {
    // 在这里可以添加自定义规则
    // 'react/react-in-jsx-scope': 'off', // 在 React 17 及以上版本中不需要导入 React
    'prettier/prettier': 'error', // Prettier 规则作为错误
  },
  // React 版本设置
  settings: {
    react: {
      version: 'detect', // 自动检测 React 版本
    },
  },
};
