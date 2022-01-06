import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import Container from '../Components/Container/Container';
import Button from '../Components/Button/Button';
import s from './reg.module.css';
export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} className={s.uiForm}>
        <h3 className={s.h3}>Войти на сайт</h3>
        <div className={s.formRow}>
          <input
            className={s.input}
            type="email"
            name="email"
            required
            value={email}
            onChange={handleChange}
          />
          <label className={s.label} htmlFor="email">
            Email
          </label>
        </div>
        <div className={s.formRow}>
          <input
            className={s.input}
            type="password"
            name="password"
            required
            value={password}
            onChange={handleChange}
          />
          <label className={s.label} htmlFor="password">
            Пароль
          </label>
        </div>
        <Button type="submit" className={s.submit} value="Войти">
          Хочу войти!!!
        </Button>
      </form>
    </Container>
  );
}
