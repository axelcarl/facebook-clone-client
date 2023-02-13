import React from 'react';

function Message({ message }) {

  return (
    <div className='message-container'>
      <div className="message-info">
        <div className='profile-pic'></div>
        <div className='presentation'>
          <div className="profile-name">{message.user}</div>
          <div className="message-date">{message.date.split('T')[0]}</div>
        </div>
      </div>
      <div className='message-text'>{ message.message }</div>
      <hr className='divider'></hr>
      <div className='message-actions'>
        <div className="like">Like</div>
        <div className="comment">Comment</div>
        <div className="share">Share</div>
      </div>
    </div>
  );
}

export default Message;