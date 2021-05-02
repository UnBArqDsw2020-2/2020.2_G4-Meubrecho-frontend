import React, { Component } from "react";
import './style.css';

class InputNewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '', 
      productCondition: 'Used', 
      isProductFree: false, 
      productPrice: 0
    };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });
    }
  };

  handleChange1(event) {
    this.setState({productName: event.target.value});
  }

  handleChange2(event) {
    this.setState({productCondition: event.target.value});
  }

  handleChange3(event) {
    console.log(event.target.value)
    this.setState({isProductFree: event.target.value});
  }

  handleChange4(event) {
    this.setState({productPrice: event.target.value});
  }

  handleSubmit(event) {
    console.log('Nome do produto: ' + this.state.productName);
    console.log('Estado do produto: ' + this.state.productCondition);
    console.log('É gratuito? ' + this.state.isProductFree);
    console.log('Preço do produto: ' + this.state.productPrice);
    event.preventDefault();
  }

  render() {
    return (
      <form className='form-input' onSubmit={this.handleSubmit} >
        <input 
          type="text" 
          value={this.state.productName} 
          onChange={this.handleChange1} 
          placeholder="Nome do produto"/>

        <label>
          Estado do produto:
          <select value={this.state.productCondition} onChange={this.handleChange2}>
              <option value="Used">Usado</option>
              <option value="New">Novo</option>
          </select>
        </label>

        <label>
          O produto é gratuito?
          <select value={this.state.isProductFree} onChange={this.handleChange3}>
              <option value={false}>Não</option>
              <option value={true}>Sim</option>
          </select>
         </label>

        <input 
          type="text" 
          value={this.state.productPrice} 
          onChange={this.handleChange4} 
          placeholder="R$ 0,0"/>

        <input type="submit" value="Cadastrar o produto" />

      </form>
    );
  }
}

export default InputNewItem;