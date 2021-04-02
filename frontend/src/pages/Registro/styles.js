import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;

  span {
    color: red;
    align-self: center;
    font-weight: bold;
  }
`;

export const Inicio = styled.div`
  width: 70%;
  background: #503e8e;
  display: flex;
  flex-direction: column;

  h2 {
    flex-wrap: wrap;
    color: #eee;
    font-size: 22px;
    margin-left: 36%;
    margin-top: 3%;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 2%;

  img {
    max-width: 65%;
    max-height: 65%;
  }

  text {
    color: #fff;
    font-size: 30px;
    margin-left: 1%;
  }

  h1 {
    margin: 0 auto;
    color: #ffff;
    font-size: 50px;
  }
`;

export const Conteudo = styled.div`
  img {
    max-width: 50%;
    max-height: 40%;
    margin-left: 25%;
  }
`;

export const Final = styled.div`
  width: 30%;
  background: #303047;
  display: flex;
  flex-direction: column;
  flex: 1;

  a {
    color: #eee;
    font-size: 20px;
    align-self: flex-end;
    margin: 22px 20px;
  }

  h2 {
    color: #ccc;
    font-size: 30px;
    font-weight: normal;
    margin-left: 20px;
  }

  form {
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
      background: #503e8e;
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
  justify-self: center;

  font-size: 10px;
  color: #ccc;

  a {
    margin: 0;
    font-size: 10px;
    margin-left: 3px;
    color: blueviolet;
    font-weight: bold;
  }
`;
