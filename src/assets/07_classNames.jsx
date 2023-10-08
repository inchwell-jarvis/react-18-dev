import classNames from "classnames"

const jarvis2 = () =>{
    // const myClass = ['box1','box2']
    const myClass2 = classNames({
        box1:true,
        box2:false,
        box3:true
    })
    return (
        <>
            {/* <div className={myClass.join(' ')}>classNames</div> */}
            <div className={myClass2}>classNames</div>
        </>
    )
}
export default jarvis2