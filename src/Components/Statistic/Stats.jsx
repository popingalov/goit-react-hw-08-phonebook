import { useSelector } from 'react-redux';
import contactsSelectors from 'redux/contacts/contacts-selectors';
import s from './Stats.module.css';

export default function Stats() {
  const total = useSelector(contactsSelectors.getTotalContactCount);

  return (
    <div className={s.stats}>
      <p className={s.item}>You have {total} contacts</p>
    </div>
  );
}
