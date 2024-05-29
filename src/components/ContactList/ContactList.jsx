import React from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter?.toLowerCase() || '')
  );

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={nanoid()}>
          {contact.name}: {contact.number}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
