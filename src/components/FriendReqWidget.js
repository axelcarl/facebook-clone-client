import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function FriendReqWidget() {
  const [friends, setFriends] = useState([]);
  const navigate = useNavigate();

  const getFriends = async () => {
    const response = await axios.get('http://localhost:5000/user/current',
      {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      });
    const allUsersResponse = await axios.get('http://localhost:5000/user', {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    });
    const currentUser = response.data.user;
    const allUsers = allUsersResponse.data.safeUsers;
    console.log(allUsers);
    const reqs = allUsers.filter(user => currentUser.friend_reqs.includes(user.id)
      && !currentUser.friends.includes(user.id));
    console.log(reqs)
    setFriends(reqs);
  }

  useEffect(() => {
    getFriends();
  }, []);

  const respondToReq = async (id) => {
    await axios.post('http://localhost:5000/user/respond',
      { id }, {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      });
  }



  return (
    <div className='friend-widget'>
      {friends ?
        friends.map(friend =>
        (<div key={crypto.randomUUID()} className='friend'>
          <div className="profile-pic">
          </div>
          <div className="profile-name">
            {`${friend.name} ${friend.lastname}`}
          </div>
          <button 
            className='accept-req-btn'
            onClick={() => respondToReq(friend.id)}
            >+</button>
        </div>)
        ) : null}
    </div>
  );
}

export default FriendReqWidget;