// 引入 React 库
import React from 'react'
// 引入 ReactDOM 的客户端部分
import ReactDOM from 'react-dom/client'
// 引入名为 App 的组件，文件名为 App.jsx
import App from './App.jsx'
// import Jarvis from './assets/01_了解JSX.jsx'
// import Jarvis from './assets/02_JSX与HTML的语法区别.jsx'
import Jarvis from './assets/03_style样式.jsx'
import ClassNames from './assets/07_classNames.jsx'

// 引入名为 index.css 的样式文件
import './index.css'
// import './assets/04_全局样式.jsx'

// 使用 ReactDOM 的 createRoot 方法，将根元素获取并创建根渲染器，然后渲染应用
ReactDOM.createRoot(document.getElementById('root')).render(
  // 使用 React 的 StrictMode 包装 App 组件，以启用严格模式
  <React.StrictMode>
    <App />
    <Jarvis></Jarvis>
    <ClassNames></ClassNames>
  </React.StrictMode>,
)
