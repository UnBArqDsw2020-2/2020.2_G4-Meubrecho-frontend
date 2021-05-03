import React, { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

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
          else setProducts({ error: 'Sem Protutos favoritados' });
        });
    } else return products;
  };
	function onClickRemove () {
	}
  const renderFav = () => {
    getFav();
    console.log('products', products);
    if (products === null) return <CircularProgress />;
    else if (products.error !== null && products.error !== undefined)
      return <h1 style={{ color: 'red' }}>Você não possui nenhum produto favoritado</h1>;
    else {
      return products.arrayProduct.map((product, index) => (
        <div key={index}>
          <Item
            name={product.nome}
            image={product.imagem}
            description={product.descricao}
            price={product.preco}
            tag={product.tag}
            buttonConfig={{ icon: 'rm', text: 'Remover dos favoritos', onClickRemove }}
          />
        </div>
      ));
    }
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>{renderFav()}</div>
  );
}
