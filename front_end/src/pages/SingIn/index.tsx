import { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../../hooks/useToast';
import { getValidationErrors } from '../../utils/getValidationErrors';

import { Input } from '../../components/Input';

import Logo from '../../assets/logo.png';

import { FiArrowLeft } from 'react-icons/fi';
import { Container, Content } from './styles';

interface SignInFormData {
  login: string;
  password: string;
}

export function SingIn() {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleOnSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          login: Yup.string()
            .required('Email obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          login: data.login,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
        });
      }
    },
    [addToast, history, signIn]
  );

  return (
    <Container>
      <Content>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
        <figure>
          <img src={Logo} alt="logo" />
        </figure>
        <Form ref={formRef} onSubmit={handleOnSubmit}>
          <span>Faça o seu login</span>
          <section>
            <Input name="login" type="email" placeholder="E-mail" />
            <Input name="password" type="password" placeholder="Senha" />

            <button>Entrar</button>
          </section>
        </Form>
      </Content>
    </Container>
  );
}
