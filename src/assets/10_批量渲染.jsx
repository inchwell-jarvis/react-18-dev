export default function jarvis() {
    const list = ["111", "222", "333"];
    let li = [];
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        li[index] = <li key={index}>{element}</li>;
    }
    return (
        <>
            <h3>批量渲染</h3>
            <p>1. JSX 默认会把数组使用空字符串连在一起展示 {list}</p>
            <p>
                2. 使用for循环 {li} 或者{" "}
                {list.map((item,index) => (
                    <li key={index}>{item}</li>
                ))}
            </p>
            <p>3. key 属性 开发过程中使用id更好</p>
        </>
    );
}
