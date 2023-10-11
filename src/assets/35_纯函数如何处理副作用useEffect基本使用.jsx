import { useEffect, useRef } from "react";

function App() {
    const ref = useRef(null);

    // 副作用 不符合纯函数的规范
    // setTimeout(() => {
    //     ref.current.focus()
    // }, 3000);

    // 副作用：符合纯函数的规范，因为事件内部是可以处理副作用的
    const handleClick = () => {
        ref.current.focus();
    };

    //  useEffect 可以在初始的时候进行副作用的操作，时机：在JSX渲染后触发
    useEffect(()=>{
        ref.current.focus();
    })

    return (
        <>
            <h3>纯函数如何处理副作用useEffect基本使用</h3>
            <button onClick={handleClick}>xxx</button>
            <input type='text' ref={ref} />
        </>
    );
}

export default App;
