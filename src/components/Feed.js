import React, { useEffect } from 'react';
import Message from './Message';

function Feed({ messages }) {

  return (
    <div className='feed'>
      {
        messages.map(message => (
          <Message key={crypto.randomUUID()} message={message[0]} />
        ))
      }
    </div>
  );
}

export default Feed;