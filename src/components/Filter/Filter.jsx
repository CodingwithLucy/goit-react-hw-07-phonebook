import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../contactsSlice.js';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };
};

export default Filter;
