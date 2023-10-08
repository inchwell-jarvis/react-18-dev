import "./04_全局样式.css"; // 此时样式会污染全局
import style2 from "./05_局部样式.module.css"; // 局部样式
import "./06scss.scss"; // 使用scss  局部使用方法同css
const jarvis = () => {
    // const style = {width:'200px',height:'200px',background:'red'}   外置变量写法
    const style = { width: 200, height: 200, background: "red" }; // 可省略 px react会自动补上
    return (
        // <div style={{width:'200px',height:'200px',background:'#08f'}}>jarvis</div>
        <>
            <div style={style}>jarvis</div>
            <div className='box'></div>
            <div className={style2.box2}>局部样式</div>
            <div className={style2["box2-head"]}>局部样式 断线 中括号</div>
            <div className={style2.box2Head}>局部样式 断线 驼峰</div>
            <div className='box3'>SCSS</div>
        </>
    );
    // return 后面可以不加（）括号，但推荐使用（）包含代码
};
export default jarvis;
