import Modal from 'react-modal';
import { useState, FormEvent } from 'react';
import { Container } from './styles';
import { FiXCircle } from 'react-icons/fi';
import { useToast } from '../../hooks/useToast';
import { useAuth } from '../../hooks/useAuth';

import { useTransaction } from '../../hooks/useTransaction';

interface INewTrasactionModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

type IFormData = {
  receiver: string;
  amount: number;
};

export function NewTrasactionModal({
  isOpen,
  onRequestClose,
}: INewTrasactionModal) {
  const [formData, setFormData] = useState<IFormData>({} as IFormData);
  const { CreateNewTransaction } = useTransaction();
  const { addToast } = useToast();
  const { user } = useAuth();

  async function handleNewTransaction(event: FormEvent) {
    try {
      event.preventDefault();

      const data = {
        login_origem: user.login,
        login_destino: formData.receiver,
        valor_transferido: formData.amount,
      };

      await CreateNewTransaction(data);

      setFormData({
        receiver: '',
        amount: 0,
      });

      addToast({
        type: 'success',
        title: 'Transação',
        description: 'Transação enviada com sucesso.',
      });
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro ao enviar um transação',
      });
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button className="react-modal-close-button" onClick={onRequestClose}>
        <FiXCircle />
      </button>
      <Container onSubmit={handleNewTransaction}>
        <h2>Fazer transferência</h2>

        <input
          placeholder="Login do favorecido"
          value={formData.receiver}
          onChange={(event) => {
            setFormData({ ...formData, receiver: event.target.value });
          }}
        />

        <input
          type="number"
          placeholder="Valor"
          value={formData.amount}
          onChange={(event) => {
            setFormData({ ...formData, amount: Number(event.target.value) });
          }}
        />

        <button type="submit">Enviar</button>
      </Container>
    </Modal>
  );
}
