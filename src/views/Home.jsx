import { Route, Routes, useNavigate, useLocation   } from "react-router-dom";

import Index1 from "./component/index1";
import Index2 from "./component/index2";
import Index3 from "./component/index3";

export default function About() {

    const paramState = useLocation().state
    console.log(paramState);
    
    const navigate = useNavigate(); // 获取导航函数
    return (
        <div className='homeBox animate__animated animate__zoomIn'>
            {/* 菜单 */}
            <div className='left'>
                <button onClick={() => navigate("/")}>前往Signin</button><br />
                <button onClick={() => navigate("/home")}>前往inde1</button><br />
                {/* 跳转子级 */}
                <button onClick={() => navigate("/home/index2")}>前往/home/index2</button><br />
                <button onClick={() => navigate("/home/index3")}>前往/home/index3</button><br />


                欢迎 {paramState.role}
            </div>
            {/* 子级 */}
            <div className='right'>
                <Routes>
                    <Route path='/' element={<Index1 />} />
                    <Route path='/index2' element={<Index2 />} />
                    <Route path='index3' element={<Index3 />} />
                </Routes>
            </div>
        </div>
    );
}
