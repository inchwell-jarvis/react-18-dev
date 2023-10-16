import { Route, Routes, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

// import Index1 from "./component/index1";
import Chat from "./component/chat/chat";
import Index2 from "./component/index2";
import Index3 from "./component/index3";

import Menu from "./component/menu/menu";
import Header from "./component/header/header";
function Home({ socket }) {
    // 登录页传输过来的数据
    const paramState = useLocation().state
    // console.log(paramState);




    // 组件参数类型限定
    Home.propTypes = {
        // 发送消息函数 传递子级使用
        socket: PropTypes.func
    }


    // const navigate = useNavigate(); // 获取导航函数
    return (
        <div className='homeBox animate__animated animate__fadeIn'>
            {/* 头部 */}
            <Header role={paramState.role}></Header>

            {/* 菜单 */}
            <Menu></Menu>

            {/* 子级 */}
            <div className='right'>
                <Routes>
                    <Route path='/' element={<Chat socket={socket} paramState={paramState} />} />
                    <Route path='/index2' element={<Index2 />} />
                    <Route path='index3' element={<Index3 />} />
                </Routes>
            </div>
        </div>
    );
}

export default Home