import React from 'react';
import { Provider } from 'react-redux';
import store from '../components/store.js';
import ContactForm from './ContactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>PHONEBOOK</h1>
        <ContactForm />
        <h2>CONTACT LIST</h2>
        <ContactList />
      </div>
    </Provider>
  );
};

export default App;
