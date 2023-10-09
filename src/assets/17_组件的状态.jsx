// function App() {
//     let num = 1;
//     let handleClick = () => {
//         num += 1;
//     };
//     return (
//         <>
//             <h3 onClick={handleClick}>组件的状态</h3>
//             <p>{num}</p>
//         </>
//     );
// }
// export default App

// 引入useState钩子，用于在函数组件中管理状态
import { useState } from "react";

// 定义名为App的函数组件
function App() {
    // 使用useState钩子来创建一个名为num的状态变量和一个名为setCount的状态更新函数，并初始化num的初始值为0
    let [num, setCount] = useState(0);

    // 定义一个叫做handleClick的函数，它将在标题元素被点击时触发，用于增加num的值
    let handleClick = () => {
        // 使用setCount函数来更新num的值，将其增加1
        setCount(num + 1);
    };

    // 返回一个React元素，该元素包含一个标题和一个段落，点击标题时会调用handleClick函数，显示num的值
    return (
        <>
            <h3 onClick={handleClick}>组件的状态</h3>
            <p>{num}</p>
        </>
    );
}

// 导出App组件，以便在其他地方使用
export default App;

