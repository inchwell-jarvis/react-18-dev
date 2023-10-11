import { useRef, forwardRef, useImperativeHandle } from "react";
// 想要获取子组件的ref 需要使用forwardRef进行转发

const App2 = forwardRef(function App2({ top, bottom }, ref) {
    // useImperativeHandle 可以指定通过ref暴露哪些操作给父级
    useImperativeHandle(ref, () => {
        return {
            // 暴露一个获取焦点的操作
            focus() {
                pref.current.focus();
            },
            // 暴露一个改变背景颜色的操作
            backgroundRed(){
                pref.current.style.background = 'red'
            }
        };
    });

    const pref = useRef(null);

    return (
        <>
            <input type="text" ref={pref} />
            {top}
            <p>num2</p>
            {bottom}
        </>
    );
});

function App() {
    const ref = useRef(null);
    const handleClick = () => {
        console.log(ref.current.focus());
        console.log(ref.current.backgroundRed());
    };
    return (
        <>
            <h3>useImperativeHandle自定义ref的暴露</h3>
            <button onClick={handleClick}>按钮</button>
            <App2 ref={ref} top={<p>222222</p>} bottom={<p>333333</p>}></App2>
        </>
    );
}

export default App;
