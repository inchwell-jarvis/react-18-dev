// import { useCallback, useEffect, useState } from "react";

// function App() {
//     const [count, setCount] = useState(0);

//     const handleClick = useCallback(() => {
//         // setCount(count + 1);
//         console.log(count);
//     }, [count]);

//     useEffect(() => {
//         handleClick();
//     }, [handleClick]);

//     // 最好是把函数定义在 useEffect 内部

//     return (
//         <>
//             <h3>尽量在useEffect内定义函数</h3>
//             <button onClick={handleClick}>按钮</button>
//         </>
//     );
// }
// export default App;

// import { useEffect, useState } from "react";

// function App() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         const handleClick = () => {
//             // setCount(count + 1);
//             console.log(count);
//         };
//         handleClick();
//     }, [count]);

//     // 最好是把函数定义在 useEffect 内部   但这样就不能在JSX内部调用了

//     return (
//         <>
//             <h3>尽量在useEffect内定义函数</h3>
//             <button>按钮</button>
//         </>
//     );
// }
// export default App;


import { useEffect, useState } from "react";  
  
function App() {  
    const [count, setCount] = useState(0);  
    
    const handleClick = () => {  
        console.log(count);  
    };  
  
    useEffect(() => {  
        handleClick();  
    }, [count]);  
  
    return (  
        <>  
            <h3>尽量在useEffect内定义函数</h3>  
            <button onClick={handleClick}>按钮</button>  
        </>  
    );  
}  
export default App;
