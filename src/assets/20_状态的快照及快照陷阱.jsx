// 引入useState钩子，用于在函数组件中管理状态
import { useState } from "react";

// 定义名为App的函数组件
function App() {
    // num 是从useState内获取来的数据快照，并不是源数据
    let [num, setCount] = useState(0);

    let handleClick = () => {
        // 这里修改只会等待页面更新后会生效，只有最后一个会生效，修改源数据后，num重新获取快照并输出到页面
        setCount(num + 1);
        setCount(num + 2);
        setCount(num + 1);
        // 这里还是会输出0  定时器还是作用于当前的作用域 闭包的特性
        setTimeout(() => {
            console.log(num);
        }, 2000);
        // 这里还是会输出0
        console.log(num);
    };

    return (
        <>
            <h3 onClick={handleClick}>状态的快照及快照陷阱</h3>
            <p>{num}</p>
        </>
    );
}

// 导出App组件，以便在其他地方使用
export default App;
