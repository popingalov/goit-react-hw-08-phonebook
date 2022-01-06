import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import Container from '../../src/Components/Container/Container';
import Button from '../Components/Button/Button';
import s from './reg.module.css';
export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} autoComplete="off" className={s.uiForm}>
        <h3 className={s.h3}>Регестрацыя</h3>
        <div className={s.formRow}>
          <input
            className={s.input}
            type="text"
            name="name"
            required
            value={name}
            onChange={handleChange}
          />
          <label className={s.label} htmlFor="email">
            Name
          </label>
        </div>
        <div className={s.formRow}>
          <input
            className={s.input}
            type="email"
            name="email"
            required
            value={email}
            onChange={handleChange}
          />
          <label className={s.label} htmlFor="password">
            Mail
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
            Password
          </label>
        </div>
        <Button type="submit" className={s.submit} value="Войти">
          Я хочу сделать это!!!
        </Button>
      </form>
    </Container>
  );
}
