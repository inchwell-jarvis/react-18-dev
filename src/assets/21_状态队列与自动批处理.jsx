import { useState } from "react";

function App() {
    let [num, setCount] = useState(0);

    let handleClick = () => {
        // setCount(num + 1);
        // setCount(num + 1);

        //  num 找的是 源数据的快照
        // setCount(num + 1);

        // 此处的 e 是找到本次队列的上一次结果
        setCount((e) => e + 1); // 1
        setCount((e) => e + 1); // 2
        setCount((e) => e + 1); // 3

        console.log(num);
    };
    // 状态队列
    // 即使setCount修改了三次，但也会等待最终结果进行处理，所以这里只会打印一次，页面也只会更新一次
    console.log("123");

    return (
        <>
            <h3 onClick={handleClick}>状态队列与自动批处理</h3>
            <p>{num}</p>
        </>
    );
}

export default App;

// 只有一次生效
// setCount(num + 1);
// setCount(num + 1);

// 每次都会生效 每次的值都是上一次队列的结果 第一次是快照
// setCount((e) => e + 1); // 1
// setCount((e) => e + 1); // 2
// setCount((e) => e + 1); // 3
