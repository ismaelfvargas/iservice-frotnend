import React, { useCallback } from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from "@unform/web";
import * as Yup from 'yup';

import logoImg from '../../assets/iservicesLogo.png';

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
    const handleSubmit = useCallback(async (data: object) => {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().min(6, 'No mínimo 6 dígitos'),
            });

            await schema.validate(data, {
                // abortEarly - retorna todos os erros das validações, em vez de retornar apenas o primeiro erro
                abortEarly: false,
            })
        } catch (err) {
            console.log(err)
        }
    }, []);

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
