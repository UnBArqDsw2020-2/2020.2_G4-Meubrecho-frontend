import styled from 'styled-components';
import { darken } from 'polished';

export const Background = styled.div`

  background: #503E8E;
  max-width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;

  h1 {
   
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    color: #eeee;
    align-self:center;
  
   
  }
`;

export const Container = styled.div`
margin: 10px 20px;
`;



export const Card = styled.div`
display:flex;
background-color: #FFFFFF;
padding: 15px;
margin: 10px;
border-radius: 15px;
border: 1px solid #CCD0EE;
flex-direction: column;`
;



export const Titulo = styled.text`
line-height: 30px;
margin: 2px auto;
border-bottom: 2px solid gray;

`;
export const Texto = styled.text`
line-height: 30px;`;


export const Button = styled.button `

  margin: 10px 20px;
  width: 400px;
  height: 60px;
  align-self:center;
  background: #303047;
  font-weight: normal;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.10s;
  &:hover {
    background: ${darken(0.03, '#303047')};
  }

`;