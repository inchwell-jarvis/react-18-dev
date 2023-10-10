import { useState } from "react";

function Button({ num, onClick }) {
    return (
        <>
            <button onClick={onClick}>hello</button>
            <p>{num}</p>
        </>
    );
}


// 将子级共用的状态 提升到共同的父级 这样只要有一方子级修改了状态 所有涉及到这个状态的地方都会更新

function App() {
    const [num, setNum] = useState(0);
    const handleClick = () => {
        setNum(num + 1);
    };
    return (
        <>
            <h3>状态提升来解决共享问题</h3>
            <Button num={num} onClick={handleClick}></Button>
            <Button num={num} onClick={handleClick}></Button>
        </>
    );
}

export default App;
