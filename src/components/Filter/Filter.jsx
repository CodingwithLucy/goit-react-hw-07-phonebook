import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../contacts.js';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label>
      FIND CONTACT BY NAME
      <input type="text" value={filter} onChange={handleFilterChange} />
    </label>
  );
};

export default Filter;
