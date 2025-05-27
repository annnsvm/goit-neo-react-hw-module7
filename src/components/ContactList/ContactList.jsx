import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectVisibleContact,
  selectIsLoading,
  selectError,
  selectContacts,
} from 'redux/Contacts/selectors';
import { deleteContacts, fetchContacts } from 'redux/Contacts/operations';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import { Item, List, Subtitle } from './ContactList.styled';
import ButtonDelete from 'components/Button/ButtonDelete';

const ContactList = () => {
  const dispatch = useDispatch();

  const visibleContact = useSelector(selectVisibleContact);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section>
      <ContactForm />
      {contacts.length < 1 ? (
        <Subtitle>Add your first contact</Subtitle>
      ) : (
        <Filter />
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <List>
          {visibleContact.map(({ id, name, number }) => (
            <Item key={id}>
              {name + ' : ' + number}
              <ButtonDelete
                type="button"
                name="delete"
                onClick={() => dispatch(deleteContacts(id))}
              ></ButtonDelete>
            </Item>
          ))}
        </List>
      )}

      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </section>
  );
};

export default ContactList;
