import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? ( 
        /* 
        Container for myself, use personaly style message
        Use React Emoji to replace string emotions to smile 
        */
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{trimmedName[0].toUpperCase() + trimmedName.slice(1)}</p>
          <div className="messageBox backgroundBlue">
            
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
        )
        : (
          /* 
          Container for other user, using another style
          Use React Emoji to replace string emotions to smile 
          */
          <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
              <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
            </div>
            <p className="sentText pl-10 ">{user[0].toUpperCase() + user.slice(1)}</p>
          </div>
        )
  );
}

export default Message;