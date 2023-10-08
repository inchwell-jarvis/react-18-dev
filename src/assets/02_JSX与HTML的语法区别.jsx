const jax_html = () => {
    const txt = <h1>xxx</h1>;
    return <h1>Hello JSX {txt} </h1>;
    // JSX 标签必须小写
    // 标签必须闭合
    // class 与 for 为关键字   使用 className htmlFor 替换
    // 属性必须是驼峰式命名  自定义属性没有规范
    // 大括号使用JavaScript  但是不能写 if for obj fun
    // 属性赋值可以直接使用大括号
    // 添加注释 /* */  //

    // 只能有一个根节点  如果必须两个标签同级可以使用  <Fragment></Fragment> 或 <></> 包含，Fragment 标签最终不会被渲染
};
export default jax_html;
