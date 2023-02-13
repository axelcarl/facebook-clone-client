import axios from 'axios';
import React, { useState } from 'react';


function MessageForm() {
  const [message, setMessage] = useState('');
  

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      try {
        await axios.post('http://localhost:5000/message',{ message }, {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="feed">
      <div className='message-form-container'>
        <div className="main-row">
          <div className="profile-pic">
          </div>
          <input type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyDown={e => handleKeyPress(e)}
            placeholder='Whats on your mind?'
            className='message-form-input'
          />
        </div>
      </div>
    </div>
  );
}

export default MessageForm;