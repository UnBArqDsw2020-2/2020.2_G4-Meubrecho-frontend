import React, { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

import Item from '../../components/item/item';

function ListaProdutos({ filters, name }) {
  const [products, setProducts] = useState(null);
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
      const request = new Request('http://localhost:3333/product', myInit);
      return fetch(request)
        .then(response => {
          if (response.status == 401) {
            localStorage.clear();
            location.href = '/';
            throw 'permission error';
          }
          return response.json();
        })
        .then(jsonResponse => {
          console.log('api', jsonResponse);
          if (jsonResponse.length !== 0) setProducts(jsonResponse);
          else setProducts({ error: 'Sem Protutos na loja' });
          return products;
        })
        .catch(e => {
          console.log(e);
        });
    } else return products;
  };

  getProducts();

  function onClickFavorite(productId) {
    console.log('clickId', productId);
    let token = localStorage.getItem('authToken');
    let userId = localStorage.getItem('userId');
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);

    var myInit = {
      method: 'POST',
      headers: myHeaders,
      body: {
        userId: userId
      }
    };
    const request = new Request(`http://localhost:3333/product/favorite/${productId}`, myInit);
    fetch(request)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Error !== undefined) alert(jsonResponse.Error);
        else alert('O produto foi adicionado aos favoritos');
      });
  }
  function validateTags(tags) {
    if (filters.length > 0)
      for (let filterElement of filters)
        for (let tagsElement of tags)
          if (filterElement === tagsElement) {
            return 1;
          }
    if (filters.length == 0) return 1;
    return 0;
  }
  const renderProducts = () => {
    if (products === null) return <CircularProgress />;
    else if (products.error !== null && products.error !== undefined)
      return <h1 style={{ color: 'red' }}>A loja não tem nenhum produto no momento</h1>;
    else {
      return products.map((product, index) => {
        if (validateTags(product.tag)) {
          if (name.length !== 0 && product.nome.includes(name))
            return (
              <div key={index}>
                <Item
                  productId={product._id}
                  name={product.nome}
                  image={product.imagem}
                  description={product.descricao}
                  price={product.preco}
                  tag=''
                  buttonConfig={{ icon: 'add', text: 'Adicionar aos favoritos', onClickFavorite }}
                  onClick={id => onClickFavorite(id)}
                />
              </div>
            );
          else if (name.length === 0)
            return (
              <div key={index}>
                <Item
                  productId={product._id}
                  name={product.nome}
                  image={product.imagem}
                  description={product.descricao}
                  price={product.preco}
                  tag=''
                  buttonConfig={{ icon: 'add', text: 'Adicionar aos favoritos', onClickFavorite }}
                  onClick={id => onClickFavorite(id)}
                />
              </div>
            );
        }
      });
    }
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
      {renderProducts()}
    </div>
  );
}
ListaProdutos.propTypes = {
  filters: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
};

export default ListaProdutos;
