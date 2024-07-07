import React, { useState } from 'react';
import Signup from '../components/Signup';
import Login from '../components/Login';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Switch to Signup' : 'Switch to Login'}
      </button>
      {isLogin ? <Login /> : <Signup />}
    </div>
  );
};

export default LoginSignup;