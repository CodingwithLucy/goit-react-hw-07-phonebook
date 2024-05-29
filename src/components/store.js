import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts.js';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: '',
  },
});

export default store;
