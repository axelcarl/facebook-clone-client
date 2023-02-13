import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function LoginForm({ extraBtn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = async () => {
    const request = await axios.post('http://localhost:5000/user/login', {
      email,
      password
    });
    localStorage.setItem('token', request.data.token);
    navigate('/');
  }
  return (
    <div className='form-holder'>
      <input
        className='login-input'
        id='email'
        name='email'
        type='text'
        value={email}
        placeholder='Email'
        onChange={e => setEmail(e.target.value)}
      />
      <input
        className='login-input'
        id='password'
        name='password'
        type='password'
        value={password}
        placeholder='Password'
        onChange={e => setPassword(e.target.value)}
      />
      <button
        className='login-button'
        onClick={submitLogin}

      >
        Log in
      </button>
      {extraBtn ? <hr className='divider'/>
        : null}
      {extraBtn ? extraBtn : null}
    </div>
  )
}

export default LoginForm