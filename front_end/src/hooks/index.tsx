import { HTMLAttributes } from 'react';
import { AuthProvider } from './useAuth';
import { ModalProvider } from './useModal';
import { TransactionProvider } from './useTransaction';
import { ToastProvider } from './useToast';

type IProvidersType = HTMLAttributes<Element>;

export function Providers({ children }: IProvidersType) {
  return (
    <AuthProvider>
      <ToastProvider>
        <TransactionProvider>
          <ModalProvider>{children}</ModalProvider>
        </TransactionProvider>
      </ToastProvider>
    </AuthProvider>
  );
}
