import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'components/contacts';
import { nanoid } from 'nanoid';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter?.toLowerCase() || '')
  );

  const handleDelete = contactId => {
    const updatedContacts = contacts.filter(
      contact => contact.id !== contactId
    );
    dispatch(deleteContact(contactId));
    dispatch({ type: 'UPDATE_CONTACTS', payload: [...updatedContacts] });
  };

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={nanoid()}>
          {contact.name}: {contact.number}
          <button onClick={() => handleDelete(contact.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
