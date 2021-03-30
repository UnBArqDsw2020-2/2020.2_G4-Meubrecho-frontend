import React from 'react';

import { Container, Header, Content, Texto } from './styles';
import LoginFoto from '../../assets/loginfoto.png';
import Logo from '../../assets/cart.png';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { signInRequest } from '../../store/modules/auth/actions';
import { useDispatch } from 'react-redux';

const schema = Yup.object().shape({
  email: Yup.string().email('Insira um email válido').required('O e-mail é obrigatorio'),
  senha: Yup.string().required('A senha é obrigatoria')
});

function Login() {
  const dispatch = useDispatch();

  function handleSubmit({ email, senha }) {

    dispatch(signInRequest(email, senha));
  }

  return (
    <Container>
      <Header>
        <img src={Logo} alt="foto de login" />
        <h1>Meu Brechó</h1>
      </Header>
      <hr />

      <Content>
        <img src={LoginFoto} alt="FotoLogin" />

        <Form schema={schema} onSubmit={handleSubmit}>
          <h2> Faça seu Login</h2>
          <Input name="email" type="email" placeholder="Seu e-mail" />
          <Input name="senha" type="password" placeholder="Sua senha" />
          <button type="submit">Fazer Login</button>
          <Texto>
            Não tem conta? <Link to={'/'}>Crie uma</Link>{' '}
          </Texto>
        </Form>
      </Content>
    </Container>
  );
}

export default Login;
