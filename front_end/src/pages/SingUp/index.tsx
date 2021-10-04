import { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { api } from '../../services/api';
import { useToast } from '../../hooks/useToast';
import { Input } from '../../components/Input';
import { getValidationErrors } from '../../utils/getValidationErrors';

import { FiArrowLeft } from 'react-icons/fi';

import Logo from '../../assets/logo.png';

import { Container, Content } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

export function SingUp() {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleOnSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          login: Yup.string()
            .required('Email obrigatório')
            .email('Digite um e-mail válido'),
          name: Yup.string().required('Nome obrigatório'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/user/register', data);

        history.push('/singin');

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer seu logon na sua Carteira Digital!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          console.log(err);
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
        });
      }
    },
    [addToast, history]
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
            <Input name="name" type="text" placeholder="Nome e Sobrenome" />
            <Input name="password" type="password" placeholder="Senha" />

            <button>Entrar</button>
          </section>
        </Form>
      </Content>
    </Container>
  );
}
