import { useState } from "react";

function computed(n) {
    console.log(123)
    return n + 1 + 2 + 3;
}

function App() {


    // 惰性初始化状态的值
    // 如果一个数组的值来自 一个计算函数，那么每次数据更新的时候 都会调用这个函数   虽然不会影响结果，但是会消耗性能
    // const [count, setCount] = useState(computed(0));

    // 做法  使用一个回调函数返回初始化的值，这样就不会每次都更新了
    const [count, setCount] = useState(()=>computed(0));

    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <>
            <h3 onClick={handleClick}>惰性初始化状态的值</h3>
            <p>1. {count}</p>
        </>
    );
}

export default App;
