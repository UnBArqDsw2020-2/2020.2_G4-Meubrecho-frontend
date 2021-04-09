import React from 'react';

import { FormControlLabel, FormGroup, TextField, Button, Checkbox } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

import SearchComponent from './search';

function Loja() {
  return (
    <div style={{ display: 'flex', flex: 1, marginTop: '10%', marginLeft: '0%' }}>
      <SearchComponent />
    </div>
  );
}

export default Loja;
