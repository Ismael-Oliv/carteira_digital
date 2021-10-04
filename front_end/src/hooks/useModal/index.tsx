import { createContext, useContext, useState, HTMLAttributes } from 'react';

interface ITtrasactionContext {
  handleOnOpen: () => void;
  handleOnClose: () => void;
  isModalOpen: boolean;
}
type IModaProviderType = HTMLAttributes<Element>;

const ModalContext = createContext({} as ITtrasactionContext);

export function ModalProvider({ children }: IModaProviderType) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOnOpen() {
    setIsModalOpen(true);
  }
  function handleOnClose() {
    setIsModalOpen(false);
  }

  return (
    <ModalContext.Provider value={{ handleOnClose, handleOnOpen, isModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be whithin a ModalProvider');
  }

  const { handleOnClose, handleOnOpen, isModalOpen } = context;

  return {
    handleOnOpen,
    handleOnClose,
    isModalOpen,
  };
}
