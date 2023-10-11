import { useState } from "react";

function App1() {
    return (
        <>
            <p>App1</p>
        </>
    );
}

function App2() {
    return (
        <>
            <p>App2</p>
        </>
    );
}

function App() {
    const [value, steValue] = useState("");

    const onChange = (e) => {
        console.log(e.target.value);
        steValue(e.target.value);
    };

    return (
        <>
            <h3>受控组件与非受控组件</h3>
            {/* 通过props控制的组件称为受控组件  通过state控制的组件称为非受控组件 */}
            {/* React 表单内置了受控组件的行为 */}
            <App1></App1>
            <App2></App2>
            <input type='text' value={value} onChange={onChange} />
        </>
    );
}
export default App;
// 在受控组件中，输入框的值被text状态变量所控制。当用户在输入框中输入内容时，onChange事件处理器会更新text变量的值，从而更新输入框的值。因此，输入框的值是受控于组件的状态的。








// import React from 'react';  
  
// function UncontrolledComponent() {  
//   return (  
//     <div>  
//       <input type="text" />  
//       <p>You've entered: {document.getElementById('input').value}</p>  
//     </div>  
//   );  
// }  
  
// export default UncontrolledComponent;
// 在非受控组件中，输入框的值并不受组件的状态所控制。它只是一个普通的HTML元素，其值由用户直接输入。因此，输入框的值是不受控制的，它取决于用户的输入。
