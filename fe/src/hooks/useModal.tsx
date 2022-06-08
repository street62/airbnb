import { useContext } from 'react';
import { ModalContext } from 'contexts/ModalContext';

export function useModal() {
  const { searchBarFocusModal, setSearchBarFocusModal, isClicked, setClicked } =
    useContext(ModalContext);

  const clickModalFocus = (id: string) => {
    if (searchBarFocusModal === id) {
      setSearchBarFocusModal?.('');
      setClicked?.(false);
    } else {
      setSearchBarFocusModal?.(id);
      setClicked?.(true);
    }
  };

  const closeModal = () => {
    setSearchBarFocusModal?.('');
    setClicked?.(false);
  };

  return {
    searchBarFocusModal,
    setSearchBarFocusModal,
    isClicked,
    setClicked,
    clickModalFocus,
    closeModal,
  };
}
