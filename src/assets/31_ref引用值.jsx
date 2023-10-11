import { useRef, useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    // let num = 0
    let num = useRef(0);
    const handleClick = () => {
        // useState 生成的快照数据改变 会引发视图重现渲染
        setCount(count+1)

        // num 可以在不更新视图的前提下改变，但是视图更新后，会重置
        // num ++
        // console.log(num)

        // 使用 useRef 生成的数据 是可以呗保留的，但是不推荐写入到JSX内
        num.current++;
        console.log(num.current);
    };
    return (
        <>
            <h3>ref引用值</h3>
            {count} ,{num.current}
            <br />
            <button onClick={handleClick}>按钮</button>
        </>
    );
}
export default App;
