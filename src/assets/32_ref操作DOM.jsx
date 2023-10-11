// import { useRef } from "react";

// function App() {

//     const myRef = useRef(null)
   
//     const handleClick = () => {
//         // 通过ref操作原生DOM
//        console.log(myRef.current)
//        myRef.current.style.background = 'red'
//     };
//     return (
//         <>
//             <h3>ref操作DOM</h3>
           
//             <button onClick={handleClick}>按钮</button>
//             <div ref={myRef}>Hello React</div>
//         </>
//     );
// }
// export default App;

import { useRef } from "react";

function App() {

    const myRef = useRef(null)
   
    const handleClick = () => {
        // 通过ref操作原生DOM
       console.log(myRef.current)
       myRef.current.style.background = 'red'
    };
    return (
        <>
            <h3>ref操作DOM</h3>
           
            <button onClick={handleClick}>按钮</button>
            <div ref={myRef}>Hello React</div>
        </>
    );
}
export default App;
