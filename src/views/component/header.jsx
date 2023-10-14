import { useEffect, useState } from 'react'
import './header.scss'
function Header({ role }) {
    const [avatarUrl, setAvatarUrl] = useState('')
    console.log(role)
    // useEffect
    // if (role === '海绵宝宝') {
    //     setAvatarUrl('/avatar1.png')
    // }
    // if (role === '派大星') {
    //     setAvatarUrl('/avatar2.png')
    // }
    // if (role === '章鱼哥') {
    //     setAvatarUrl('/avatar3.png')
    // }
    // if (role === '珊迪') {
    //     setAvatarUrl('/avatar4.png')
    // }
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



                    </div>
                </div>

            </div>
        </>
    )
}
export default Header