import axios from 'axios';
import React, { useEffect, useState } from 'react';


function FriendWidget() {
  const [friends, setFriends] = useState([]);

  const getFriends = async () => {
    const response = await axios.get('http://localhost:5000/user/friends',
    {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    });
   setFriends(response.data);
  }

  useEffect(() => { 
    getFriends();
  }, [])
  return (
    <div className='friend-widget'>
        { friends ? 
          friends.map(friend => 
            (<div key={crypto.randomUUID()} className='friend'>
              <div className="profile-pic">
              </div> 
              <div className="profile-name">
                {`${friend.first_name} ${friend.last_name}`} 
              </div>
            </div>)
          ): null}
    </div>
  );
}

export default FriendWidget;