import { createContext, Dispatch, ReactNode, useState } from 'react';

type ModalInfo = {
  focusModal: string;
  setFocusModal?: Dispatch<React.SetStateAction<string>>;
  clickModalFocus?: (option: string) => void;
};

export const ModalContext = createContext<ModalInfo>({
  focusModal: '',
});

export function ModalProvider({ children }: { children: ReactNode }) {
  const [focusModal, setFocusModal] = useState<string>('');

  const clickModalFocus = (option: string) => {
    focusModal === option ? setFocusModal('') : setFocusModal(option);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ModalContext.Provider value={{ focusModal, setFocusModal, clickModalFocus }}>
      {children}
    </ModalContext.Provider>
  );
}
