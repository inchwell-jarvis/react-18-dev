// 引入 React 的 useState 钩子
import { useState } from "react";


import React_01 from './assets/01_了解JSX'
import React_02 from './assets/02_JSX与HTML的语法区别'
import React_03 from './assets/03_style样式.jsx'
import React_04 from './assets/07_classNames.jsx'
import React_05 from './assets/08_jsx事件.jsx'
import React_06 from './assets/09_条件渲染.jsx'
import React_07 from './assets/10_批量渲染.jsx'
import React_08 from './assets/11_组件点标记写法.jsx'
import React_09 from './assets/12_组件通信.jsx'
import React_10 from './assets/13_组合组件.jsx'
import React_11 from './assets/14_通信默认值.jsx'
import React_12 from './assets/15_限定通信值类型.jsx'
import React_13 from './assets/16_组件必须是纯函数.jsx'
import React_14 from './assets/17_组件的状态.jsx'
import React_15 from './assets/18_状态如何改变视图.jsx'
import React_16 from './assets/19_记忆多状态.jsx'
import React_17 from './assets/20_状态的快照及快照陷阱.jsx'
import React_18 from './assets/21_状态队列与自动批处理.jsx'
import React_19 from './assets/22_要严格遵守状态是不可变的.jsx'





// 引入应用的样式文件
import "./App.css";

// 定义名为 App 的函数组件
function App() {
    // 使用 useState 钩子来创建一个名为 count 的状态和更新函数 setCount
    const [count, setCount] = useState(0);
    return (
        // 使用空的尖括号表示 React 片段
        <>
            <h1>Vite + React + JarvisDowney</h1>
            <div className='card'>
                <h3>计数器</h3>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>

            <React_01></React_01>
            <React_02></React_02>
            <React_03></React_03>
            <React_04></React_04>
            <React_05></React_05>
            <React_06></React_06>
            <React_07></React_07>
            <React_08></React_08>
            <React_09></React_09>
            <React_10></React_10>
            <React_11></React_11>
            <React_12></React_12>
            <React_13></React_13>
            <React_14></React_14>
            <React_15></React_15>
            <React_16></React_16>
            <React_17></React_17>
            <React_18></React_18>
            <React_19></React_19>
        </>
    );
}

// 导出名为 App 的组件
export default App;
