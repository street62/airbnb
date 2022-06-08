import { createContext, Dispatch, ReactNode, useState } from 'react';

type ModalInfo = {
  searchBarFocusModal: string;
  setSearchBarFocusModal?: Dispatch<React.SetStateAction<string>>;
  isClicked: boolean;
  setClicked?: Dispatch<React.SetStateAction<boolean>>;
};

export const ModalContext = createContext<ModalInfo>({
  searchBarFocusModal: '',
  isClicked: false,
});

export function ModalProvider({ children }: { children: ReactNode }) {
  const [searchBarFocusModal, setSearchBarFocusModal] = useState<string>('');
  const [isClicked, setClicked] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ searchBarFocusModal, setSearchBarFocusModal, isClicked, setClicked }}
    >
      {children}
    </ModalContext.Provider>
  );
}
