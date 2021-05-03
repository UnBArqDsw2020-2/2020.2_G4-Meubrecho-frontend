import React, { useState } from 'react';

import { FormControlLabel, FormGroup, TextField, Button, Checkbox } from '@material-ui/core';
import Items from '../../components/items/items';

import SearchComponent from './search';
import ProductsList from './productsList';

function Loja() {
  const [filters, setFilters] = useState([]);
  const [name, setName] = useState('');
  function handleChange(text) {
    setName(text);
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <SearchComponent filters={filters} handleChangeText={handleChange} setFilters={setFilters} />
      <ProductsList name={name} filters={filters} />
    </div>
  );
}

export default Loja;
