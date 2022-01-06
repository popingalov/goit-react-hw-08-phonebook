import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from 'redux/contacts/contacts-operations';
import contactsSelectors from 'redux/contacts/contacts-selectors';
import Container from '../Components/Container/Container';
import Section from '../Components/Section/Section';

import ContactList from '../Components/ContactList/ContactList';
import ContactForm from '../Components/ContactForm/ContactForm';
import Filter from '../Components/Filter/Filter';
import Stats from '../Components/Statistic/Stats';
import Modal from '../Components/Modal/Modal';
import Button from '../Components/Button/Button';
import ContactAdder from '../Components/ContactAdder/ContactAdder';
import Spinner from '../Components/Spinner/Spinner';

export default function ContactView() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);
  const total = useSelector(contactsSelectors.getTotalContactCount);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(state => !state);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <Container>
      <Section>
        <div>
          <ContactAdder forClick={toggleModal} />
          <Filter />
          <Stats />
        </div>

        {isLoadingContacts ? (
          <Spinner size={100} />
        ) : total > 0 ? (
          <div>
            <ContactList />
          </div>
        ) : (
          <div>
            <h1>You have no contacts yet!</h1>
          </div>
        )}
      </Section>

      {showModal && (
        <Modal forClose={toggleModal}>
          <ContactForm />
          <Button type="button" onClick={toggleModal}>
            Cancel
          </Button>
        </Modal>
      )}
    </Container>
  );
}
