import { selectContacts } from 'redux/Contacts/selectors';
import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/Contacts/operations';
import { useState } from 'react';
import { Form, Input, Label } from './ContactForm.styled';
import ButtonAdd from 'components/Button/ButtonAdd';


export default function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleSubmit = event => {
    event.preventDefault();

    const contact = {
      name,
      number,
      id: nanoid(),
    };

    const isExist = contacts.find(
      ({ name }) =>
        name.toLowerCase().trim() === contact.name.toLowerCase().trim()
    );

    if (isExist) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }

    dispatch(addContacts(contact));
    setName('');
    setNumber('');
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>
        Name
        <Input
          type="text"
          name="name"
          onChange={handleNameChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameInputId}
        />
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleNumberChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberInputId}
        />
      </Label>
      <ButtonAdd />
    </Form>
  );
}
