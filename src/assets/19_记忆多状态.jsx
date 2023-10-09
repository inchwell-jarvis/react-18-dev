// 引入useState钩子，用于在函数组件中管理状态
import { useState } from "react";

// 定义名为App的函数组件
function App() {
    // 每次调用的时候 useState 都会对数据绑定索引值，所以即使通过useState声明多个数据，也不影响数据的修改
    let [num, setCount] = useState(7);


    let handleClick = () => {

        setCount(num + 1);
    };
    console.log("123");

    return (
        <>
            <h3 onClick={handleClick}>记忆多状态</h3>
            <p>{num}</p>
        </>
    );
}

// 导出App组件，以便在其他地方使用
export default App;