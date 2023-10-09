const jarvis = () => {
    const txt = <h3>JSX 与 html的语法区别</h3>;
    return (
        <>
            {txt}
            <p>1. JSX 标签必须小写</p>
            <p>2. JSX 标签必须闭合</p>
            <p>3. class 与 for 为关键字   使用 className htmlFor 替换</p>
            <p>4. 属性必须是驼峰式命名  自定义属性没有规范</p>
            <p>5. 大括号使用JavaScript  但是不能写 if for obj fun</p>
            <p>6. 属性赋值可以直接使用大括号</p>
            <p>7. 添加注释  /* */   //</p>
            <p>8. 只能有一个根节点  如果必须两个标签同级可以使用 Fragment 标签 或 <></> 包含，Fragment 标签最终不会被渲染</p>
        </>
    );
};
export default jarvis;
