import React, { useState } from 'react';
import history from '../../services/history';
import CircularProgress from '@material-ui/core/CircularProgress';

import Item from '../../components/item/item';

function Venda() {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    let token;
    token = localStorage.getItem('authToken');
    if (products.length === 0) {
      console.log('teste', products);
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${token}`);

      var myInit = {
        method: 'GET',
        headers: myHeaders
      };
      const request = new Request('http://localhost:3333/productbyme', myInit);
      return fetch(request)
        .then(response => {
          if (response.status == 401) {
            localStorage.clear();
            history.push('/');
            throw 'permission error';
          }
          return response.json();
        })
        .then(jsonResponse => {
          console.log('api', jsonResponse);
          if (jsonResponse.arrayProduct.length !== 0) setProducts(jsonResponse.arrayProduct);
          else setProducts({ error: 'Sem Protutos na loja' });
          return products;
        })
        .catch(e => {
          console.log(e);
        });
    } else return products;
  };
  function onClickRemove(productId) {
    console.log('clickId', productId);
    let token = localStorage.getItem('authToken');
    let userId = localStorage.getItem('userId');
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);

    var myInit = {
      method: 'DELETE',
      headers: myHeaders,
      body: {
        userId: userId
      }
    };
    const request = new Request(`http://localhost:3333/product/${productId}`, myInit);
    fetch(request)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Error !== undefined) alert(jsonResponse.Error);
        else {
          getProducts();
          alert('Produto removido da loja');
        }
      });
  }
  getProducts();
  const renderProducts = () => {
    if (products === null) return <CircularProgress />;
    else if (products.error !== null && products.error !== undefined)
      return <h1 style={{ color: 'red' }}>Você não possui nenhum produto a venda</h1>;
    else {
      return products.map((product, index) => (
        <div key={index}>
          <Item
            productId={product._id}
            name={product.nome}
            image={product.imagem}
            description={product.descricao}
            price={product.preco}
            tag=''
            buttonConfig={{ icon: 'rm', text: 'Remover o ítem da loja', onClickRemove }}
            onClick={id => onClickRemove(id)}
          />
        </div>
      ));
    }
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
      {renderProducts()}
    </div>
  );
}

export default Venda;
