import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FormControlLabel, FormGroup, TextField, Button, Checkbox } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import { Search as SearchIcon } from '@material-ui/icons';
import * as Consts from './consts';
import useSelected from './hooks';

function SearchComponent({ filters, setFilters, handleChangeText }) {
  const MyCheckbox = withStyles({
    root: {
      color: '#303047',
      '&$checked': {
        color: purple[600]
      }
    },
    checked: {}
  })(props => <Checkbox color='default' {...props} />);
  const firstRow = [
    { key: Consts.CHANGE_SUPERIOR, value: 'Superior' },
    { key: Consts.CHANGE_INFERIOR, value: 'Inferior' },
    { key: Consts.CHANGE_CAMISA, value: 'Camisas' },
    { key: Consts.CHANGE_CAMISETA, value: 'Camisetas' },
    { key: Consts.CHANGE_AGASALHO, value: 'Agasalhos' },
    { key: Consts.CHANGE_CALCA, value: 'Calça' },
    { key: Consts.CHANGE_SHORT, value: 'Short' }
  ];
  const seccondRow = [
    { key: Consts.CHANGE_SAIA, value: 'Saia' },
    { key: Consts.CHANGE_TENIS, value: 'Tenis' },
    { key: Consts.CHANGE_SANDALIA, value: 'Sandalia' },
    { key: Consts.CHANGE_BOTA, value: 'Bota' },
    { key: Consts.CHANGE_SALTO, value: 'Salto' },
    { key: Consts.CHANGE_BONE, value: 'Bone' },
    { key: Consts.CHANGE_CHAPEU, value: 'Chapeu' }
  ];
  const {
    chapeu,
    bone,
    salto,
    bota,
    sandalia,
    tenis,
    saia,
    short,
    calca,
    agasalho,
    camiseta,
    camisa,
    inferior,
    superior,
    expanded,
    toggle
  } = useSelected();

  const renderCheckboxes = row => {
    const rowList = 0 === row ? firstRow : seccondRow;
    const fields = rowList.map((value, index) => {
      var state;
      switch (value.key) {
        case Consts.CHANGE_SUPERIOR:
          state = superior;
          break;
        case Consts.CHANGE_INFERIOR:
          state = inferior;
          break;
        case Consts.CHANGE_CAMISA:
          state = camisa;
          break;
        case Consts.CHANGE_CAMISETA:
          state = camiseta;
          break;
        case Consts.CHANGE_AGASALHO:
          state = agasalho;
          break;
        case Consts.CHANGE_CALCA:
          state = calca;
          break;
        case Consts.CHANGE_SHORT:
          state = short;
          break;
        case Consts.CHANGE_SAIA:
          state = saia;
          break;
        case Consts.CHANGE_TENIS:
          state = tenis;
          break;
        case Consts.CHANGE_SANDALIA:
          state = sandalia;
          break;
        case Consts.CHANGE_BOTA:
          state = bota;
          break;
        case Consts.CHANGE_SALTO:
          state = salto;
          break;
        case Consts.CHANGE_BONE:
          state = bone;
          break;
        case Consts.CHANGE_CHAPEU:
          state = chapeu;
          break;
        default:
          break;
      }
      return (
        <FormControlLabel
          key={value.key}
          control={
            <MyCheckbox
              checked={state}
              onChange={() => {
                console.log('searchFilters', filters);
                if (state) {
                  var index = filters.indexOf(value.value);
                  filters.splice(index, 1);
                  setFilters(filters.splice(index, 1));
                } else setFilters([...filters, value.value]);
                toggle(value.key);
              }}
              name={value.value}
            />
          }
          label={value.value}
        />
      );
    });
    return fields;
  };

  return (
    <div style={{ flexDirection: 'column', display: 'flex', flex: 1, marginTop: '10%', marginLeft: '0%' }}>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
        <TextField
          onChange={payload => handleChangeText(payload.target.value)}
          type='search'
          variant='outlined'
          id='outlined-search'
          style={{ width: '35%' }}
        />
        <Button style={{ background: 'transparent', border: 'transparent' }}>
          <SearchIcon />
        </Button>
      </div>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
        <FormGroup column>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            {renderCheckboxes(0)}
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            {renderCheckboxes(1)}
          </div>
        </FormGroup>
      </div>
    </div>
  );
}

SearchComponent.propTypes = {
  setFilters: PropTypes.func.isRequired,
  filters: PropTypes.array.isRequired,
  handleChangeText: PropTypes.func.isRequired
};
export default SearchComponent;
