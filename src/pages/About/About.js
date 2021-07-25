import React from 'react'

import { ChatEngineWrapper, ChatSocket, ChatFeed } from 'react-chat-engine'

const HomePage = () => {
    return (
        <ChatEngineWrapper>
            <ChatSocket 
                projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
                chatID='43690'
                chatAccessKey='ca-cee29865-2c8e-4167-aefa-af2bbccbb6cb'
                senderUsername='salimLaCouleur'
            />

            <ChatFeed activeChat='43690'/> 
        </ChatEngineWrapper>
    )
}

export default HomePage