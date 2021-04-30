import React from 'react';
import './item.css';
import PropTypes from 'prop-types';
import Camisa from '../../assets/plain-tshirt.jpg';
import { Stars as StarsIcon } from '@material-ui/icons';
import { Button } from '@material-ui/core';

const Item = ({ name, image, description, price, tag }) => {
  console.log('name', name);
  return (
    <div className='item'>
      <div className='image-product'>
        <img src={Camisa} />
      </div>
      <div className='product-description'>
        <div className='product-name'>{name}</div>
        <div className='product-price'>{price}</div>
      </div>
      <Button className='btn-comprar'>
        <StarsIcon className='carrinho' />
        <div>Adicionar aos favoritos</div>
      </Button>
    </div>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired
};

export default Item;
