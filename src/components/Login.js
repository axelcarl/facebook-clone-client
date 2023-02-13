import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function Login() {

  const [signup, setSignup] = useState(false);

  const signupBtn = (
    <button
      className='signup-button'
      onClick={() => setSignup(true)}
    >
      Sign up
    </button>
  );
  const loginBtn = (
    <button
      className='go-back-login-btn'
      onClick={() => setSignup(false)}
    >
      x
    </button>
  )

  return (
    <div className='login-page'>
      <h1 className='login-header'>facebook</h1>
      {signup ?
        <SignupForm extraBtn={loginBtn}/>
        :
        <LoginForm extraBtn={signupBtn} />
      }
    </div>
  )
}

export default Login;