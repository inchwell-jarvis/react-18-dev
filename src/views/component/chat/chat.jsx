import { useEffect, useState } from 'react';
import PropTypes, { object } from "prop-types";
import { useRef } from "react";

import './chat.scss'
function Chat({ socket, paramState }) {

    const [value, steValue] = useState("");
    const [ChatValue, setChatValue] = useState([]);
    const inputMsg = useRef(null)
    const chatList = useRef(null)
    const role = paramState.role
    const role2 = ''



    useEffect(() => {
        // 去获取一次历史记录
        socket.send(JSON.stringify({ type: 'system', value: '获取历史记录', role: '' }))
    }, [])

    useEffect(() => {
        const current = chatList.current
        //scrollHeight是页面的高度
        current.scrollTop = current.scrollHeight
    }, [ChatValue])


    // 副作用 不符合纯函数的规范



    // 实时更新数据
    const onChange = (e) => {
        steValue(e.target.value);
    }

    // 回车
    const onKeyDown = (e) => {
        if (e.keyCode == 13) {
            send()
        }
    }

    // 发送消息
    const send = () => {
        steValue('')
        socket.send(JSON.stringify({ type: 'info', value: value, role: paramState.role }))
    }

    // 接收到消息时的回调函数
    socket.onmessage = function (event) {
        const data = JSON.parse(event.data);
        // 推送数据有内容  且 最后一条 和 当前最后一条不是同一条
        // console.log(data)
        // 判断是不是自己
        data.chatHistory.forEach(element => {
            if (element.role == paramState.role) element['class'] = 'chatHistory_li_my'
            if (element.role != paramState.role) element['class'] = 'chatHistory_li_ta'
            if (element.type == 'system') element['class'] = 'chatHistory_system'
        });
        setChatValue(data.chatHistory)
    };

    // 组件参数类型限定
    Chat.propTypes = {
        socket: PropTypes.func,
        paramState: PropTypes.object
    };

    return (
        <div className="Chat">

            {/* 聊天记录插件 */}
            <div className="chatHistory" ref={chatList} >
                {
                    ChatValue.map((item, index) => (
                        <>
                            {item.class == 'chatHistory_li_my' &&
                                <div className="chatHistory_li_my" key={item.id} >
                                    {/* 头像 */}
                                    <div className="avatar">
                                        <img src={item.role2} alt="" />
                                    </div>
                                    {/* 内容 */}
                                    <div className="content">
                                        <span>{item.message}</span>
                                    </div>
                                </div>
                            }

                            {item.class == 'chatHistory_li_ta' &&
                                <div className="chatHistory_li_my chatHistory_li_ta" key={item.id} >
                                    {/* 头像 */}
                                    <div className="avatar">
                                        <img src={item.role2} alt="" />
                                    </div>
                                    {/* 内容 */}
                                    <div className="content">
                                        <span>{item.message}</span>
                                    </div>
                                </div>
                            }

                            {/* {item.class == 'chatHistory_system' &&

                                <div className="chatHistory_system" key={index + '2'} >
                                    <div className="content">{item.message}</div>
                                </div>
                            } */}
                        </>
                    ))
                }
            </div>


            {/* 输入插件 */}
            <div className="enterInformation">
                <nav style={{ textAlign: 'center' }}>
                    <input ref={inputMsg} type="text" value={value} onChange={onChange} onKeyDown={onKeyDown} />
                    <button onClick={send}>发送</button>
                </nav>
            </div>
        </div>
    )
}
export default Chat