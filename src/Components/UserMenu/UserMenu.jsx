import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import authOperations from 'redux/auth/auth-operations';
import Button from '../Button/Button';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={s.container}>
      <div className={s.greeting}>
        <span className={s.name}>Welcome,</span>
        <span className={s.accent}>{`${name}!`}</span>
      </div>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </Button>
    </div>
  );
}
