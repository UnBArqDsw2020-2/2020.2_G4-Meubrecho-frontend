import styled from 'styled-components';
import { darken } from 'polished';
export const Container = styled.div`
    display:flex;
    flex-direction: column;
    background: #303047;
    max-width: 100%;
    height: 100vh;


    span {
    color: red;
    align-self:center;
    font-weight:bold;

    hr {

        color: #000;
       
    }
  }

  
`;


export const Header = styled.div`

    display:flex;
    flex:1;
    justify-content:center;
    align-items:center;
    img {
       

        max-width: 60%;
        max-height: 60%;
    }

    h1 {

        color: #ffff;
        margin-left:15px;
    }





`;


export const Content = styled.div`

    display:flex;
    flex-wrap: wrap;
    align-items:center;
    
    
    img {

       max-width:70%;
       max-height:80%;
    }

    form {

       
        background: #303047;
        display: flex;
        flex:1;
        flex-direction:column;
        width: 100%;


        h2{
            align-self:center;
            margin-bottom:10px;
            color: #eee;
        }

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


export const Texto = styled.p`

    align-self:center;

    a{
        color: #eee;
    }



`