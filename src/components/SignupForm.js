import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupForm({ extraBtn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const navigate = useNavigate();

  const submitSignup = async () => {
    try {
      await axios.post('http://localhost:5000/user/signup', {
        email,
        password,
        name,
        lastname
      });
      const request = await axios.post('http://localhost:5000/user/login', {
        email,
        password
      });
      localStorage.setItem('token', request.data.token);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='form-holder' id='signup-form'>
      {extraBtn ? extraBtn : null}
      <input
        id='name'
        name='name'
        type='text'
        placeholder='Firstname'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        id='lastname'
        name='lastname'
        type='text'
        placeholder='Lastname'
        value={lastname}
        onChange={e => setLastname(e.target.value)}
      />

      <input
        id='email'
        name='email'
        type='text'
        placeholder='Email'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <hr className='divider' />
      <input
        id='password'
        name='password'
        type='password'
        placeholder='Password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button
        onClick={submitSignup}
        className='signup-button'
      >
        Sign up
      </button>
    </div>
  )
}

export default SignupForm;