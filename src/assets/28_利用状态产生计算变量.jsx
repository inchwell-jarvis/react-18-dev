import { useState } from "react"

// 展示两个值 第二个值是第一个值的两倍
function App (){ 
    const [count,setCount] = useState(0)
    // const [count2,setCount2] = useState(0)   // 由于没有调用 setCount2() 系统认为 count2 没有发生改变 所以不会生效
    const count2 = count * 2    // 这个值是根据状态生成的，不用加入状态，所以不用加入状态监听
    const handleClick = () => {
        setCount(count + 1);
        // setCount2((count + 1) * 2)   // 会生效，带代码有些繁琐
    };
    return (
        <>
            <h3>利用状态产生计算变量</h3>
            <button onClick={handleClick}>点击</button>
            {count},
            {count2}
        </>
    )
}

export default App