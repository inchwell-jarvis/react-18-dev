// 引入 React 的 useState 钩子
import { useState } from "react";
// 引入 React 和 Vite 的 Logo 图片
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// 引入应用的样式文件
import "./App.css";

// 定义名为 App 的函数组件
function App() {
    // 使用 useState 钩子来创建一个名为 count 的状态和更新函数 setCount
    const [count, setCount] = useState(0);
    return (
        // 使用空的尖括号表示 React 片段
        <>
            <div>
                {/*
         rel="noreferrer"是一种告诉浏览器不要传递引用来源信息（referrer）的方法。
        如果你不添加这个属性，浏览器在打开链接时可能会传递当前页面的 URL 作为引用来源，
        这可能会泄漏一些用户隐私信息。 
        */}
                <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
                    <img src={viteLogo} className='logo' alt='Vite logo' />
                </a>
                <a href='https://react.dev' target='_blank' rel='noreferrer'>
                    <img
                        src={reactLogo}
                        className='logo react'
                        alt='React logo'
                    />
                </a>
            </div>
            <h1>Vite + React + JarvisDowney</h1>
            <div className='card'>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className='read-the-docs'>
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

// 导出名为 App 的组件
export default App;
