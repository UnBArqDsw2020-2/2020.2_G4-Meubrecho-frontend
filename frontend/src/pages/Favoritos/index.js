import React, { useState } from 'react';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import CircularProgress from '@material-ui/core/CircularProgress';
import api from '../../services/api';

import Item from '../../components/item/item';

export default function Favoritos() {
  const [products, setProducts] = useState(null);
  const getFav = () => {
    let token;
    token = localStorage.getItem('authToken');
    if (products === null) {
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${token}`);

      var myInit = {
        method: 'GET',
        headers: myHeaders
      };
      const request = new Request('http://localhost:3333/productfavorited', myInit);
      return fetch(request)
        .then(response => response.json())
        .then(products => {
          console.log(products);
          if (products.Error === undefined) setProducts(products);
        });
    } else return products;
  };
  const renderFav = () => {
    getFav();
    console.log('products', products);
    if (products === null) return <CircularProgress />;
    else {
      return products.map((product, index) => (
        <div key={index}>
          <Item
            name={product.name}
            image={product.image}
            description={product.description}
            price={product.price}
            tag={product.tag}
          />
        </div>
      ));
    }
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>{renderFav()}</div>
  );
}
