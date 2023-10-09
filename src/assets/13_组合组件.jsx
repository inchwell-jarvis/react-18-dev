// function Fun1({num}) {
//     console.log(num)
//     return <p>num1</p>;
// }

// function Fun2({ children }) {
//     return (
//         <>
//             <p>
//                 num2
//             </p>
//             {children}
//         </>
//     );
// }

// function Fun3() {
//     const num = '123'
//     return (
//         <>
//             <h3>组合组件</h3>
//             <p>1. 使用 children 组合通信效果更好 修改作用域</p>
//             <Fun2>
//                 <Fun1 num={num}></Fun1>
//             </Fun2>
//         </>
//     );
// }

// export default Fun3;

function Fun2({ top, bottom }) {
    return (
        <>
            {top}
            <p>num2</p>
            {bottom}
        </>
    );
}

function Fun3() {
    return (
        <>
            <h3>组合组件</h3>
            <p>1. 使用 children 组合通信效果更好 修改作用域</p>
            <Fun2 top={<p>222222</p>} bottom={<p>333333</p>}>
                {/* 将这两段文字分开放在子级的不同位置 */}
            </Fun2>
        </>
    );
}

export default Fun3;
