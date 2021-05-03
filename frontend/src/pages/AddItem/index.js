import React from 'react';
import './style.css';
import DisplayImage from '../../components/displayImage/displayImage';
import InputNewItem from '../../components/inputNewItem/inputNewItem';

// import { Container } from './styles';
let optionsState = ''



function AddItem() {
	let optionsState = ''
  return (
	<div className='item1'>
		<div>
			<div className='addPhoto'>
			<DisplayImage></DisplayImage>
		</div>
		<div className='addProductInformation'>
			<InputNewItem></InputNewItem>
		</div>
		</div>
	</div>
	);
}

export default AddItem;