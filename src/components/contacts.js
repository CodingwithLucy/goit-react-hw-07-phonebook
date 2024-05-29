import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      return {
        ...state,
        contacts: state.contacts.concat(action.payload),
      };
    },
    deleteContact: (state, action) => {
      return {
        ...state,
        contacts: state.filter(contact => contact.id !== action.payload),
      };
    },
    setFilter: (state, action) => {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
