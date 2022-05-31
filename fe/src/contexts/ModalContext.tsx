import { createContext, Dispatch, ReactNode, useState } from 'react';

type ModalInfo = {
  focusModal: string;
  setFocusModal?: Dispatch<React.SetStateAction<string>>;
  clickModalFocus?: (id: string) => void;
  closeModal?: () => void;
  isClicked: boolean;
  checkClicked?: (id: string) => void;
};

export const ModalContext = createContext<ModalInfo>({
  focusModal: '',
  isClicked: false,
});

export function ModalProvider({ children }: { children: ReactNode }) {
  const [focusModal, setFocusModal] = useState<string>('');
  const [isClicked, setClicked] = useState<boolean>(false);

  const clickModalFocus = (id: string) => {
    if (focusModal === id) {
      setFocusModal('');
      setClicked(false);
    } else {
      setFocusModal(id);
      setClicked(true);
    }
  };

  const closeModal = () => {
    setFocusModal('');
  };

  return (
    <ModalContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ focusModal, setFocusModal, clickModalFocus, closeModal, isClicked }}
    >
      {children}
    </ModalContext.Provider>
  );
}
