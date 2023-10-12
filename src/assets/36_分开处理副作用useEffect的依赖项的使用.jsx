import { useEffect, useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState("hello react");

    //可以多次调用useEffect  分别处理不同的副作用
    // useEffect(()=>{
    //     console.log(count)
    // })
    // useEffect(()=>{
    //     console.log(msg)
    // })
    // const handleClick = ()=>{
    //     // 每次更新组件 每个useEffect函数都会触发  （出现问题，只想触发部分副作用）
    //     setCount(count+1)
    // }



    // 初始的时候，都会触发
    // 添加依赖项以后，依赖项发生改变才会触发
    // 如果依赖项为空数组 [],那么只会初始触发
    // 内部是通过 Object.is 来判断是否发生改变

    useEffect(() => {
        console.log(count);
        // 给 useEffect 添加依赖项 只有依赖项发生改变时会触发 
    },[count]);
    useEffect(() => {
        console.log(msg);
    },[msg]);
    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <>
            <h3>分开处理副作用useEffect的依赖项的使用</h3>
            <button onClick={handleClick}>按钮</button>
        </>
    );
}
export default App;
