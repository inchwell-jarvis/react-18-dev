// import { useState } from "react";

// function NumAdd() {
//     const [count, setCount] = useState(0);
//     const handleClick = () => {
//         setCount(count + 1);
//     };
//     return (
//         <>
//             <button onClick={handleClick}>点击</button>
//             {count}
//         </>
//     );
// }

// function App() {
//     const [show,setShow] = useState(true)
//     const handleClickShow = () =>{
//         setShow(!show)
//     }
//     return (
//         <>
//             <h3>状态的重置处理问题</h3>
//             <button onClick={handleClickShow}>显示隐藏</button>
//             {/* 销毁重建 组件的状态会重置 */}
//             {show && <NumAdd></NumAdd>}

//         </>
//     );
// }

// export default App;

import { useState } from "react";

function NumAdd({style}) {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <button style={style} onClick={handleClick}>点击</button>
            {count}
            {Math.random()}
        </div>
    );
}

function App() {
    const [isStyle, setIsStyle] = useState(false);
    const handleClickShow = () => {
        setIsStyle(!isStyle);
    };
    return (
        <>
            <h3>状态的重置处理问题</h3>
            <button onClick={handleClickShow}>添加样式</button>
            {/* 当组件的位置没有发生改变时，状态是被保留的。结构体不同 或者 结构的key值不同时 不会保留状态 */}
            {/* 结构上发生改变时会重置状态 */}
            <br />
            {isStyle + ""}
            <br />
            {isStyle ?  <NumAdd style={{ border: "1px solid red",marginLeft:'10px' }} /> :<NumAdd />}
        </>
    );
}

export default App;
