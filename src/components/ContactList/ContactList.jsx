import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'components/contactsSlice.js';
import { nanoid } from 'nanoid';

const ContactList = ({ contacts }) => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter?.toLowerCase() || '')
  );

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={nanoid}>
          {name}: {number}
          <button onClick={() => handleDelete(id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
