import { useNavigate } from "react-router-dom";
import "./Signin.scss";
import { useState } from "react";

export default function Signin() {
    const navigate = useNavigate(); // 编程式路由跳转

    // 记录卡片的className
    const [classNameList, setClassNameList] = useState("card");
    // card animate__animated animate__bounceOut

    // 
    // useEffect(() => {
    //     console.log("进入");
    //     setClassNameList("card animate__animated animate__zoomIn");

    //     return () => {
    //         // 1.卸载组件时执行  2.下一次更新前清理当前作用域
    //         console.log("退出");
    //     };
    // });

    // 点击事件
    const handleClick = (role) => {
        console.log(role);
        setClassNameList("card animate__animated animate__bounceOut");

        setTimeout(() => {
            navigate("/home", { state: { role: role } });
        }, 1000);
    };

    return (
        <div className="signinBox">
            {/* 中间卡片 */}
            <div className={classNameList}>
                {/* 左边logo */}
                <div className="left">
                    <div className="logo"></div>
                </div>
                {/* 右边 欢迎词 输入框 */}
                <div className="right">
                    <p className="title">UChat</p>
                    <br />
                    <p className="text">开始你的第一次对话</p>
                    <br />
                    <br /> <br /> <br />
                    <p style={{ color: "#3883f7", fontWeight: "bold" }}>
                        选择身份 开始对话
                    </p>
                    <br />
                    <div className="optionalIdentity">
                        <div className="identity" onClick={() => handleClick("海绵宝宝")}>
                            <img src="/avatar1.png" alt="" />
                        </div>
                        <div className="identity" onClick={() => handleClick("派大星")}>
                            <img src="/avatar2.png" alt="" />
                        </div>

                        <div className="identity" onClick={() => handleClick("章鱼哥")}>
                            <img src="/avatar3.png" alt="" />
                        </div>
                        <div className="identity" onClick={() => handleClick("珊迪")}>
                            <img src="/avatar4.png" alt="" />
                        </div>
                    </div>
                    {/* <button onClick={handleClick}>前往Home</button> */}
                </div>
            </div>
        </div>
    );
}
