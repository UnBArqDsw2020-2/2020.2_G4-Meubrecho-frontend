import React from 'react';
import './style.css';
import DisplayImage from '../../components/displayImage/displayImage';

// import { Container } from './styles';

function AddItem() {
  return (
    <div className='item1'>
    	<div>
    		<div className='addPhoto'>
    		<DisplayImage></DisplayImage>
    			add photo
    		</div>
    		<div className='addProductInformation'>
    			addProductInformation
    		</div>
    	</div>
    </div>
  );
}

export default AddItem;