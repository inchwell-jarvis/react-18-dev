// export default function jarvis() {
//     let content;
//     let count = 1;
//     if (count > 3) {
//         content = <p>1. 大于3</p>;
//     } else {
//         content = <p>1. 小于等于3</p>;
//     }
//     return (
//         <>
//             <h3>条件渲染</h3>
//             {content}
//         </>
//     );
// }

// export default function jarvis() {
//     let count = 7;
//     return (
//         <>
//             <h3>条件渲染</h3>
//             {count > 3 ? <p>1. 大于3</p>:<p>1. 小于等于3</p>}
//         </>
//     );
// }

export default function jarvis() {
    let count = 7;
    return (
        <>
            <h3>条件渲染</h3>
            {/* && || 满足条件即展示后面的内容 */}
            {/* 布尔值 空字符 null undefined 对象 函数  不会被渲染 */}
            {/* 如何输出不能渲染的内容 值+‘空字符串’  或者 JSON.stringify()  */}
            <p>1. if else</p>
            <p>2. ? :</p>
            <p>3. && ||</p>
            {count > 3 && <p>你好</p> }
        </>
    );
}
