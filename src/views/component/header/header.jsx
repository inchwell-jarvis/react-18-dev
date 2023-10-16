import { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import './header.scss'
function Header({ role }) {
    const [avatarUrl, setAvatarUrl] = useState('')
    const navigate = useNavigate(); // 编程式路由跳转

    console.log(role)

    // 副作用 不符合纯函数的规范
    useEffect(() => {
        if (role === '海绵宝宝') {
            setAvatarUrl('/avatar1.png')
        }
        if (role === '派大星') {
            setAvatarUrl('/avatar2.png')
        }
        if (role === '章鱼哥') {
            setAvatarUrl('/avatar3.png')
        }
        if (role === '珊迪') {
            setAvatarUrl('/avatar4.png')
        }
    }, [role])

    return (
        <>
            <div className="header">
                {/* 左侧系统logo */}
                <div className="headerLeft">
                    <div className="logo"></div>
                    <div className="name">UChat</div>
                </div>


                {/* 右侧 */}
                <div className="headerRight">


                    {/* 个人信息部分 */}
                    <div className="personalInformation">
                        <div className="avatar">
                            <img src={avatarUrl} alt="" />
                        </div>
                        {/* 退出登录 */}
                        <div className="logOut" onClick={()=>{navigate('/')}}>退出登录</div>
                    </div>
                </div>

            </div>
        </>
    )
}

// 组件参数类型限定
Header.propTypes = {
    role: PropTypes.string
    // 使用 PropTypes 限定 传递值的类型

    // 可以同时验证多重类型
    // role: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    // 还可以限定具体值等等
};
export default Header