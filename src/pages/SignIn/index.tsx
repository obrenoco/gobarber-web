import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu Login</h1>

        <input placeholder="Email" />

        <input type="password" placeholder="Password" />

        <button type="submit">Entrar</button>
        <a href="lost">Esqueci minha senha</a>
      </form>

      <a href="cadastro">
        <FiLogIn />
        Criar conta
      </a>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
