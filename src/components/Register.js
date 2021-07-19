import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from "./AuthForm";

function Register({onRegister}) {
  return (
    <AuthForm
      onSubmit={onRegister}
      title="Регистрация"
      btnText="Зарегистрироваться"
    >
      <Link to='/sign-in' className="form__link">Уже зарегистрированы? Войти</Link>
    </AuthForm>
  )
}

export default Register;
