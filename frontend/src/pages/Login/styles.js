import styled from 'styled-components';
import { darken } from 'polished';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #303047;
  max-width: 100%;
  height: 100%;

  span {
    color: red;
    align-self: center;
    font-weight: bold;

    hr {
      color: #000;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20%;
  font-size: 18px;

  img {
    max-width: 60%;
    max-height: 60%;
  }

  h1 {
    color: #ffff;
    margin-left: 15px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100%;

  img {
    max-width: 70%;
    max-height: 80%;
  }

  form {
    background: #303047;
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    max-width: 600px;

    h2 {
      align-self: center;
      margin-bottom: 10px;
      color: #eee;
    }

    input {
      margin: 8px 15px;
      background: white;
      border: 0;
      border-radius: 4px;
      height: 55px;
      padding: 15px;
      color: black;

      &::placeholder {
        color: gray;
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

export const Texto = styled.p`
  align-self: center;

  a {
    color: #33AAFF;
  }
`;
