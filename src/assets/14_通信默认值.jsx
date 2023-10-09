// ES6 默认值 num = 0 没传递的话走默认值
// function Jarvis({num = 0}) {
//     return (
//         <>
           
//             <p> {num}xxxxxxxxxxxxx</p>
//         </>
//     );
// }


// react 提供的默认值方式 
function Jarvis({num}) {
    return (
        <>
            <p> {num}xxxxxxxxxxxxx</p>
        </>
    );
}
Jarvis.defaultProps = {
    num:'12'
}

function App() {
    const num = 123
    return (
        <>
            <h3>通信默认值</h3>
            {/* 传输的默认值 */}
            <Jarvis ></Jarvis>
            <Jarvis num={num}></Jarvis>
        </>
    );
}

export default App;
