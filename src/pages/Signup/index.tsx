import React from 'react';
import {FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi';
import { Form } from "@unform/web";

import logoImg from '../../assets/iservicesLogo.png';

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
    function handleSubmit(data: object): void {
        console.log(data);
    }

    return (
        <Container>
            <Background/>
            <Content>

                <img src={logoImg} alt="iservices" />

                <Form onSubmit={handleSubmit}>
                    <h1>Faça seu Cadastro</h1>

                    <Input name="nome" icon={FiUser} placeholder="Nome" />
                    <Input name="email" icon={FiMail} placeholder="E-mail" />
                    <Input
                        name="password"
                        icon={FiLock}
                        type="password"
                        placeholder="Senha"
                    />

                    <Button type="submit">Cadastrar</Button>
                </Form>

                <a href="/#">
                    <FiArrowLeft />
                    Voltar para login
                </a>

            </Content>
        </Container>
    );
};
export default SignUp;
