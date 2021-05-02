import React, { Component } from "react";
import './style.css';

class InputNewItem extends Component {
  constructor(props) {
    super(props);
    this.optionsState = ''

  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });
    }
  };

  render() {
    return (
      <form className='form-input'>
        <input type="text" name="name" placeholder="Nome do produto"/>

        <select value={this.optionsState}>
          <option value="A">Apple</option>
          <option value="B">Banana</option>
          <option value="C">Cranberry</option>
        </select>



        <select value={this.optionsState}>
          <option value="A">Apple</option>
          <option value="B">Banana</option>
          <option value="C">Cranberry</option>
        </select>

        <input type="text" name="name" placeholder="R$ 0,0"/>

        <input type="submit" value="Submit" />

      </form>
    );
  }
}

export default InputNewItem;