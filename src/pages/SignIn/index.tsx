import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu Login</h1>

        <Input name="email" icon={FiMail} placeholder="Email" />

        <Input
          name="password"
          type="password"
          icon={FiLock}
          placeholder="Password"
        />

        <Button type="submit">Entrar</Button>

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
