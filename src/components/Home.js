import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Feed from './Feed';
import MessageForm from './MessageForm';
import Banner from './Banner';
import SidePanel from './SidePanel';
import FriendWidget from './FriendWidget';
import FriendReqWidget from './FriendReqWidget';

function Home() {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const getMessages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/message', {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      });
      const userResponse = await axios.get('http://localhost:5000/message/profile', {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      });
      const retrievedMessages = [];

      response.data.messages.forEach(message => 
        retrievedMessages.push([message]));

      userResponse.data.messages.forEach(message => 
        retrievedMessages.push([message]));
        
      retrievedMessages.sort((a, b) => a[0].date > b[0].date ? -1 : 1);

      setMessages(retrievedMessages);
    } catch (error) {
      navigate('/login');
    }
  }

  useEffect(() => {
    getMessages();
  }, [messages]);

  return (
    <div className='homepage'>
      <Banner/>
      <SidePanel side={"left"} title={"Friend Requests"} component={<FriendReqWidget/>} />
      <SidePanel side={"right"} title={"Your Friends"} component={<FriendWidget/>}/>
      <div className='home-main-content'>
        <MessageForm/>
        <Feed messages={messages} />
      </div>
    </div>
  );
}

export default Home;