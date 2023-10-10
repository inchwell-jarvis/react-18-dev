// import { useState } from "react";
// import { cloneDeep } from "lodash"

// function App() {
//     let [list, setList] = useState([1, 2, 3]);

//     let handleClick = () => {
//         // 不可以直接修改数组与对象   使用拓展运算符   像数组前后添加数据
//         // setList([...list, 4]);
//         // 使用 slice 添加到指定位置
//         // setList([...list.slice(0, 1), 4, ...list.slice(1)]);

//         // 替换元素  修改元素
//         // setList(list.map((rv,index)=>{
//         //     if(index == 2){
//         //         return 9
//         //     }else{
//         //         return rv
//         //     }
//         // }))

//         // 排序的话 可以先复制一份 不影响原数组
//         // let list2 = [...list]
//         // list2.reverse()  // 数组置反   数组层级比较少的话可以这样用
//         // setList(list2)

//         // 安装 lodash 工具库 进行深拷贝
//         let list2 = cloneDeep(list)
//         list2.reverse()  // 数组置反   数组层级比较少的话可以这样用
//         setList(list2)

//     };
//     console.log(list);

//     return (
//         <>
//             <h3 onClick={handleClick}>常见的对象和数组修改的解决方案</h3>
//             <p>
//                 {list.map((rv) => (
//                     <span key={rv}>{rv}</span>
//                 ))}
//             </p>
//         </>
//     );
// }

// export default App;
import { useState } from "react";
import { cloneDeep } from "lodash";

function App() {
    // let [obj, setObj] = useState({ name: "小明", age: 12 });

    // let handleClick = () => {
    //     // 不可以这样修改，这样会丢失别的属性
    //     // setObj({name:'小飞'})

    //     // 内容比较少的情况 使用 ...展开对象，然后添加需要修改的项即可
    //     setObj({
    //         ...obj,
    //         name:'小飞'
    //     });
    // };

    let [obj, setObj] = useState({
        name: { name1: "111", name2: "222" },
        age: 12,
    });

    let handleClick = () => {
        // 层级比较多的时候 使用 深拷贝
        let obj2 = cloneDeep(obj);
        obj2.name.name1 = "333";
        setObj(obj2);
        // 深拷贝对于大数据量使用非常消耗性能  解决方法见下小节
    };

    return (
        <>
            <h3 onClick={handleClick}>常见的对象和数组修改的解决方案</h3>
            <p>{JSON.stringify(obj)}</p>
        </>
    );
}

export default App;
