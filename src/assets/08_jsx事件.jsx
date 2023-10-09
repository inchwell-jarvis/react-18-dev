export default function jarvis() {
    const click = (e) => {
        console.log(e); // event 合成事件
        alert("点击了");
    };
    const handleClick = (num) => {
        return (e) => {
            console.log(e);
            console.log(num);
        };
    };
    // 箭头函数传参 
    const handleClick2 = (e,num) => {
        console.log(e);
        console.log(num);
    };
    return (
        <>
            <h3>jsx事件</h3>
            <p onClick={click}>1. 点击事件</p>
            <p onClick={click}>2. event 合成事件</p>
            <p>3. 事件委托，所有的事件最后都会放在容器身上</p>
            <p onClick={handleClick(123)}>4. 传参</p>
            <p
                onClick={(e) => {
                    handleClick2(e,123);
                }}
            >
                5. 传参 箭头函数传参 推荐
            </p>
        </>
    );
}
