import { cloneDeep } from "lodash";
import { useState } from "react";

function App() {
    const [value, steValue] = useState("");
    const [todolist, steTodoList] = useState([]);
    // 修改input事件
    const handleChange = (e) => {
        console.log(e.target.value);
        steValue(e.target.value);
    };
    // 添加任务
    const handleClick = () => {
        console.log(value);
        let list = cloneDeep(todolist);
        list.push({ text: value, bool: false, id: list.length });
        console.log(list);

        steValue("");
        steTodoList(list);
    };
    // 修改任务状态
    const handleCheckbox = (e, item) => {
        console.log(item);
        console.log(e.target.checked);
        let list = cloneDeep(todolist);
        list.find((rv) => rv.id === item.id).bool = e.target.checked;
        console.log(list);
        steTodoList(list);
    };
    // 添加数据事件
    return (
        <>
            <h3>任务列表</h3>
            <input type='text' value={value} onChange={handleChange} />{" "}
            <button onClick={handleClick}>添加</button>
            <br />
            <h5>未完成任务</h5>
            <ul>
                {todolist.map(
                    (rv, index) =>
                        !rv.bool && (
                            <li key={index}>
                                <input
                                    type='checkbox'
                                    checked={rv.bool}
                                    onChange={(e) => handleCheckbox(e, rv)}
                                />
                                {rv.text}
                            </li>
                        )
                )}
            </ul>
            <h5>已完成任务</h5>
            <ul>
                {todolist.map(
                    (rv, index) =>
                        rv.bool && (
                            <li key={index}>
                                <input
                                    type='checkbox'
                                    checked={rv.bool}
                                    onChange={(e) => handleCheckbox(e, rv)}
                                />
                                <span style={{textDecoration: 'line-through'}}> {rv.text}</span>
                            </li>
                        )
                )}
            </ul>
        </>
    );
}
export default App;
