import React from 'react';

import Loja from '../Loja';
import Venda from '../Venda';
import Favoritos from '../Favoritos';
import { PAGE_FAVORITOS, PAGE_VENDA, PAGE_LOJA } from './consts';

export default function pages({ page }) {
  if (page === PAGE_FAVORITOS) return <Favoritos />;
  if (page === PAGE_VENDA) return <Venda />;
  if (page === PAGE_LOJA) return <Loja />;
  else return null;
}
