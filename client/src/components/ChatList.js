import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import ChatContext from '../context/chat/chatContext'
import Chat from './Chat'


const ChatList = () => {
    const chatContext = useContext(ChatContext)

    const {chats} = chatContext
    return (
        <>
          {chats.map(chat => <Chat chat={chat} key={chat.id}/>)}  
        </>
    )
}

export default ChatList;
