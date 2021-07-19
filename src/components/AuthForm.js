import React from 'react';

function AuthForm({onSubmit, title, btnText, children}) {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePass(e) {
    setPass(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(email, pass);
  }

  return (
    <section className="section section_place_auth">
      <form onSubmit={handleSubmit} className="form" name="registerForm">
        <h2 className="form__title">{title}</h2>

        <fieldset className="form__inputs">
          <input onChange={handleChangeEmail} value={email || ''} className="form__input" type="email" placeholder="Email"/>
          <input onChange={handleChangePass} value={pass || ''} className="form__input" type="password" placeholder="Пароль"/>
        </fieldset>

        <input className="form__btn" type="submit" value={btnText}/>
      </form>
      {children}
    </section>
  )
}

export default AuthForm;
