function Jarvis2() {
    return <p>声明函数2</p>;
}

const QF = {
    Jarvis3() {
        return <p>声明函数3</p>;
    }
}
const {Jarvis3} = QF



const QT = () => {
    return <p>声明函数4</p>;
}
QT.QT2 = () => {
    return <p>声明函数5</p>;
}



function jarvis() {
    return (
        <>
        <h3>组件点标记写法</h3>
        <Jarvis2></Jarvis2>
        {/* 组件点标记写法 */}
        <QF.Jarvis3></QF.Jarvis3>
        {/* 组件点标记写法 解构 */}
        <Jarvis3></Jarvis3>

        <QT></QT>
        <QT.QT2></QT.QT2>
        </>
    );
}

export default jarvis;
