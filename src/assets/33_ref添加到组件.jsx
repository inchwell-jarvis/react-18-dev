import { useRef, forwardRef } from "react";
// 想要获取子组件的ref 需要使用forwardRef进行转发

const App2 = forwardRef(function App2({ top, bottom }, ref) {
    return (
        <>
            <p ref={ref}>xxx</p>
            {top}
            <p>num2</p>
            {bottom}
        </>
    );
});

function App() {
    const ref = useRef(null);
    const handleClick = () => {
        console.log(ref.current);
    };
    return (
        <>
            <h3>ref添加到组件</h3>
            <button onClick={handleClick}>按钮</button>
            <App2 ref={ref} top={<p>222222</p>} bottom={<p>333333</p>}></App2>
        </>
    );
}

export default App;
