import React, { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import Item from '../../components/item/item'

function listaProdutos() {
  const [products, setProducts] = useState(null);
  const getProducts = () => {
    let token;
    token = localStorage.getItem('authToken');
    if (products === null) {
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${token}`);

      var myInit = {
        method: 'GET',
        headers: myHeaders
      };
      const request = new Request('http://localhost:3333/product', myInit);
      return fetch(request)
        .then(response => response.json())
        .then(products => {
          console.log(products);
          if (products.Error === undefined) setProducts(products);
          else setProducts({ error: 'Sem Protutos na loja' });
        });
    } else return products;
  };
  const renderFav = () => {
    getProducts();
    console.log('products', products);
    if (products === null) return <CircularProgress />;
    else if (products.error !== null || products.error !== undefined)
      return <h1 style={{ color: 'red' }}>A loja não tem nenhum produto no momento</h1>;
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

export default listaProdutos;

