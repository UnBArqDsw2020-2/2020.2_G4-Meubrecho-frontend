import React from 'react';
import './item.css';
import Camisa from '../../assets/plain-tshirt.jpg';
import { Stars as StarsIcon } from '@material-ui/icons';
import { Button } from '@material-ui/core'

const Item = () => {
  return (
    <div className='item'>
      <div className='image-product'>
        <img src={Camisa} />
      </div>
      <div className='product-description'>
        <div className='product-name'>Camisa manga curta</div>
        <div className='product-price'>R$ 30,00</div>
      </div>
      <Button className='btn-comprar'>
        <StarsIcon className='carrinho'  />
        <div>Adicionar aos favoritos</div>
      </Button>
    </div>
  );
};

export default Item;
