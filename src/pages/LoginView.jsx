import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import Container from '../Components/Container/Container';
import Button from '../Components/Button/Button';

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
      <div>
        <form onSubmit={handleSubmit} autoComplete="off">
          <label>
            E-mail
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={handleChange}
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={handleChange}
            />
          </label>
          <Button type="submit">Sign in</Button>
        </form>
      </div>
    </Container>
  );
}
