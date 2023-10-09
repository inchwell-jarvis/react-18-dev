import classNames from "classnames"
import style2 from "./05_局部样式.module.css"; // 局部样式

const jarvis2 = () =>{
    // const myClass = ['box1','box2']
    const myClass2 = classNames({
        box1:true,
        box2:false,
        box3:true,
        [style2.box2Head]:true
    })
    return (
        <>
            {/* <div className={myClass.join(' ')}>classNames</div> */}
            <p className={myClass2}>6. classNames 使用对象的方式完成CSS</p>
        </>
    )
}
export default jarvis2