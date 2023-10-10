// 安装 npm i immer use-immer

// import { useState } from "react";
// import { cloneDeep } from "lodash";
import { useImmer } from "use-immer";

function App() {
    let [obj, setObj] = useImmer([1, 2, 3]);

    let handleClick = () => {
        // draft 就是 obj 的副本    使用draft 修改他会自动检测修改了那个部分，然后去更新  对象同样适用
        setObj((draft) => {
            draft.push(5);
        });
    };

    return (
        <>
            <h3 onClick={handleClick}>immer 简化不可变对象操作</h3>
            <p>{JSON.stringify(obj)}</p>
        </>
    );
}

export default App;
