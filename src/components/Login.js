import React from 'react';
import AuthForm from './AuthForm';

function Login({onLogin}) {

  return (
    <AuthForm
      onSubmit={onLogin}
      title="Вход"
      btnText="Войти"
    />
  )
}

export default Login;
