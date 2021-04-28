import React from 'react';

import { FormControlLabel, FormGroup, TextField, Button, Checkbox } from '@material-ui/core';
import Items from '../../components/items/items';

import SearchComponent from './search';

function Loja() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <SearchComponent />
      <Items />
    </div>
  );
}

export default Loja;
