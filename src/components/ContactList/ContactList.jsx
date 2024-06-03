import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../contactsSlice.js';
import { nanoid } from 'nanoid';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = Array.isArray(contacts)
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleInputChange = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <label>
        FIND CONTACT BY NAME
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search by name"
        />
      </label>
      <ul className="contact-list">
        {filteredContacts.map(contact => (
          <li key={nanoid()} className="contact-list-item">
            {contact.name}: {contact.number}
            <button onClick={() => handleDelete(contact.id)}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
