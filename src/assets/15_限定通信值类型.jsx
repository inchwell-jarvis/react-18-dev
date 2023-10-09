import PropTypes from "prop-types";

function Welcome({ num }) {
    return (
        <p>
            Welcome,
            {num}
        </p>
    );
}

// 使用原生 propTypes 配合 模块使用
Welcome.propTypes = {
    // num:PropTypes.number
    // 使用 PropTypes 限定 传递值的类型

    // 可以同时验证多重类型
    num: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    // 还可以限定具体值等等
};

function APP() {
    const num ="{name:'x'}";
    return (
        <>
            <h3>限定通信值类型</h3>
            <Welcome num={num}></Welcome>
        </>
    );
}

export default APP;
