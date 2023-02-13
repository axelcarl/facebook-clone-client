import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Banner from './Banner';

function Users() {
  const [userArray, setUserArray] = useState([]);
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get("searchTerm");

  const getUsers = async () => {
    const response = await axios.get('http://localhost:5000/user', {
      headers:
      {
        Authorization: localStorage.getItem('token')
      }
    });
    const relevantUserArray = response.data.safeUsers
      .filter(user => {
        const fullname = user.name + user.lastname;
        return fullname.includes(searchTerm)
      });
    setUserArray(relevantUserArray);
  }

  useEffect(() => {
    getUsers();
  }, []);

  const addUser = async (id) => {
    const response = await axios.post('http://localhost:5000/user/req',
      { id },
      {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      });
    console.log(response);
  }

  return (
    <div className='users-container'>
      <Banner />
      {userArray.map(user =>
      (
        <div className='friend friend-XL' key={crypto.randomUUID()}>
          <div className="profile-pic"></div>
          <div className="profile-name">{user.name} {user.lastname} </div>
          <div className="send-req">
            <button
              onClick={() => addUser(user.id)}
            >Add User</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;