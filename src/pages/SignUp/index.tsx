import React from 'react';
import {
 FiMail, FiLock, FiUser, FiArrowLeft
} from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu cadastro</h1>

        <Input name="name" icon={FiUser} placeholder="Nome" />
        <Input name="email" icon={FiMail} placeholder="Email" />
        <Input
          name="password"
          type="password"
          icon={FiLock}
          placeholder="Password"
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="cadastro">
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>
  </Container>
);

export default SignIn;
