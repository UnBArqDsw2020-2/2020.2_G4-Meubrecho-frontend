import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`

  display: flex;

  min-height: 100vh;

  span {
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      color: red;
      margin-bottom: 9px;
    }

`;


export const Inicio = styled.div`
   
  width: 70%;
  background: #503E8E;
  display:flex;
  flex-direction:column;


  h2{
    color: #eee;
    font-size:22px;
    margin-left:320px;
    margin-top: 15px;
  }
   
 
`;


export const Header = styled.div`

  display:flex;
  align-items: center;
  margin:15px;

  img{
    width:50px;
    height:50px;
  }

  text{
    color: #fff;
    font-size: 30px;
    margin-left: 5px;
  }

  h1 {
    margin: 0 auto;
    color: #FFFF;
    font-size: 60px;
  }

`

export const Conteudo = styled.div`

img{
    width: 550px;
    height:520px;
    margin-left: 200px;
  }


`






export const Final = styled.div`


  width:30%;
  background: #303047;
  display:flex;
  flex-direction: column;
  
  a{
    color: #eee;
    font-size: 20px;
    align-self: flex-end;
    margin: 22px 20px;
  }

  h2{
    color: #ccc;
    font-size:30px;
    font-weight: normal;
    margin-left: 20px;
  }
    
  form{ 

    display: flex;
    flex-direction: column;
    margin-top: 30px;


    input {
      margin: 8px 15px;
      background: rgba(0, 0, 0, 0.3);
      border: 0;
      border-radius: 4px;
      height: 55px;
      padding: 15px;
      color: #fff;
     
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      margin: 15px 15px;
      height: 60px;
      background: #503E8E;
      font-weight: normal;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.3s;
      &:hover {
        background: ${darken(0.03, '#503E8E')};
      }
    }

  }


`;


export const Termos = styled.p`
  display: flex;
  align-self: center;
  justify-self:center;
  align-content:center;
  font-size: 10px;
  color: #ccc;


  a{
    font-size:10px;
    margin: 0 10px;
    padding:0;
  
  }
  
  

`

