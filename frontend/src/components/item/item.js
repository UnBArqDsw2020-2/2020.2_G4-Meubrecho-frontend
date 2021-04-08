import React from 'react';
import './item.css';
import Camisa from '../../assets/plain-tshirt.jpg';
import Carrinho from '../../assets/carrinho.svg';

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
      <button className='btn-comprar'>
        <img className='carrinho' src={Carrinho} />
        <div>Adicionar ao carrinho</div>
      </button>
    </div>
  );
};

export default Item;
