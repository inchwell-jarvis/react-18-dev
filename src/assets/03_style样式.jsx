import "./04_全局样式.css"; // 此时样式会污染全局
import style4 from "./05_局部样式.module.css"; // 局部样式
import "./06scss.scss"; // 使用scss  局部使用方法同css
const jarvis = () => {
    const style1 = "外置变量写法  const style = {width:'200px',height:'200px',background:'red'}  使用：<div style={style}>jarvis</div>"   // 外置变量写法
    const style2 = "外置变量写法  const style = {width:'200  ',height:'200  ',background:'red'}  使用：<div style={style}>jarvis</div> 可省略 px react会自动补上"  ; // 可省略 px react会自动补上
    return (
        // <div style={{width:'200px',height:'200px',background:'#08f'}}>jarvis</div>
        <>
            <h3>style 样式</h3>
            <p>1. {style1}</p>
            <p>2. {style2}</p>
            <p className='style3'>3. 全局样式 声明一个css然后引入到一个文件内，会自动化污染全局样式   import ./04_全局样式.css</p>
            <p className={style4.box2}>4. 局部样式 文件后缀为.module.css  引入方式：import style4 from ./05_局部样式.module.css  使用方式见源码</p>
            {/* <div className={style4.box2}>局部样式</div>
            <div className={style4["box2-head"]}>局部样式 短线 中括号</div>
            <div className={style4.box2Head}>局部样式 短线 驼峰 需修改vite.config.js</div> */}
            <p className='scss'>5. SCSS 安装使用  </p>
        </>
    );
    // return 后面可以不加（）括号，但推荐使用（）包含代码
};
export default jarvis;
