// import { useState, useEffect } from "react";

// function Chat({ name }) {
//     useEffect(() => {
//         console.log("进入", { name });
//         return () => {
//             // 1.卸载组件时执行  2.下一次更新前清理当前作用域
//             console.log("退出", { name });
//         };
//     });
//     return <p>Hello Chat!</p>;
// }

// function App() {
//     const [show, setShow] = useState(true);
//     const [name, setName] = useState("00000");

//     const handleClick = () => {
//         setShow(!show);
//     };

//     const handleClickName = (name2) => {
//         console.log(name2);
//         setName(name2);
//     };
//     return (
//         <>
//             <h3>useEffect清理操作的重要性</h3>
//             <button onClick={handleClick}>按钮</button>
//             {show && <Chat name={name}></Chat>}

//             <br />

//             <button
//                 onClick={() => {
//                     handleClickName("11111");
//                 }}
//             >
//                 xiaoming
//             </button>
//             <button
//                 onClick={() => {
//                     handleClickName("22222");
//                 }}
//             >
//                 xiaohong
//             </button>

//             <p>{name}</p>
//         </>
//     );
// }
// // 当卸载组件或更新组件的时候，可以通过 useEffect 来实现一些清理工作
// export default App;



import { useState, useEffect } from "react";

function Chat({ name }) {
    useEffect(() => {
        console.log("进入", { name })
    },[name]);
    return <p>Hello Chat!</p>;
}

function App() {
    const [show, setShow] = useState(true);
    const [name, setName] = useState("00000");

    const handleClick = () => {
        setShow(!show);
    };

    const handleClickName = (name2) => {
        console.log(name2);
        setName(name2);
    };
    return (
        <>
            <h3>useEffect清理操作的重要性</h3>
            <button onClick={handleClick}>按钮</button>
            {show && <Chat name={name}></Chat>}

            <br />
            
            <button
                onClick={() => {
                    handleClickName("11111");
                }}
            >
                xiaoming
            </button>
            <button
                onClick={() => {
                    handleClickName("22222");
                }}
            >
                xiaohong
            </button>

            <p>{name}</p>
        </>
    );
}
// 当卸载组件或更新组件的时候，可以通过 useEffect 来实现一些清理工作
export default App;
