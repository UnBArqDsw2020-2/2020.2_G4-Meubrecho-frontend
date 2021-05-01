import React from 'react';

import Loja from '../Loja';
import Venda from '../Venda';
import Favoritos from '../Favoritos';
import AddItem from '../AddItem';
import { PAGE_FAVORITOS, PAGE_VENDA, PAGE_LOJA, PAGE_ADD_ITEM } from './consts';

export default function pages({ page }) {
  if (page === PAGE_FAVORITOS) return <Favoritos />;
  if (page === PAGE_VENDA) return <Venda />;
  if (page === PAGE_LOJA) return <Loja />;
  if (page === PAGE_ADD_ITEM) return <AddItem />;
  else return null;
}
