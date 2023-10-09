import { useState } from "react";

function App() {
    let [num, setCount] = useState(7);

    let handleClick = () => {
        // 不可以直接对状态进行修改
        // num + 1
        // 必须使用官方的方法进行修改 只有使用setCount才会重新渲染，并且拿到最新的快照。  修改状态的值没有发生改变，程序会运行并输出，但组件并不会重新渲染
        setCount(num + 1);
    };
    console.log("123");

    return (
        <>
            <h3 onClick={handleClick}>要严格遵守状态是不可变的</h3>
            <p>{num}</p>
        </>
    );
}

export default App;
