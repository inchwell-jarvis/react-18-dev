// function Welcome({ count, msg, show }) {
//     return (
//         <p>
//             Welcome,
//             {count},{msg},{show + ""}
//         </p>
//     );
// }

// function Welcome({ onClick, fun }) {
//     fun("你好");
//     return <p onClick={onClick}>Welcome</p>;
// }

function Welcome({name }) {
    return <p>{name}</p>;
}


function Hello() {
    // const num = 12345;
    const handleClick = () => {
        console.log("123");
    };
    const fun = (e) => {
        console.log(e);
    };
    const obj = {
        name: "name",
        sgh: "123",
        sdjha: "12312",
    };
    return (
        <div>
            <h3>组件通信</h3>
            <p>1. props传递值</p>
            {/* <Welcome count={num} msg='你好！' show></Welcome> */}
            <p>2. props传递事件、函数</p>
            {/* <Welcome onClick={handleClick} fun={fun} ></Welcome> */}
            <p>3. 批量传递数据 ...</p>
            {/* <Welcome  {...obj}></Welcome> */}
        </div>
    );
}
export default Hello;
