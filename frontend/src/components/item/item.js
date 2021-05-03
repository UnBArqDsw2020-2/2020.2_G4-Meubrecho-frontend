import React from 'react';
import './item.css';
import PropTypes from 'prop-types';
import Camisa from '../../assets/plain-tshirt.jpg';
import { Stars as StarsIcon, DeleteForever as DeleteForeverIcon } from '@material-ui/icons';
import { Button } from '@material-ui/core';

const Item = ({ productId, name, image, description, price, tag, buttonConfig, onClick }) => {
  console.log('id', productId);
  return (
    <div className='item'>
      <div className='image-product'>
        <img src={Camisa} />
      </div>
      <div className='product-info'>
        <div className='product-name'>
          {name
            .split(' ')
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ')}
        </div>
        <div className='product-price'>{`${price} R$`}</div>
        <div className='product-description'>{description}</div>
      </div>
      <Button className='btn-comprar' onClick={() => onClick(productId)}>
        {buttonConfig.icon === 'add' ? <StarsIcon color='primary' /> : <DeleteForeverIcon color='error' />}
        <div>{buttonConfig.text}</div>
      </Button>
    </div>
  );
};

Item.propTypes = {
  productId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  buttonConfig: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired
};

export default Item;
