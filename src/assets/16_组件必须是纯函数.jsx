let num = 1
function app() {
    num ++ 
    console.log(num)
    return (
        <>
            <h3>组件必须是纯函数</h3>
            <p>{num}</p>
        </>
    )
}

export default app;
 
// 纯函数不得修改 函数外的数据  严格模式会调用两次当前函数
// 纯函数 相同的输入得到相同的输出  例如这个函数返回随机或者后端的数据就是不纯函数
