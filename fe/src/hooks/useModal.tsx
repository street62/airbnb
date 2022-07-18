import { useContext } from 'react';
import { ModalContext } from 'contexts/ModalContext';

export function useModal() {
  const {
    reservationFocusModal,
    setReservationFocusModal,
    searchBarFocusModal,
    setSearchBarFocusModal,
    isClicked,
    setClicked,
  } = useContext(ModalContext);

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

  const clickReservationModal = (reservationFocusModal: boolean) =>
    setReservationFocusModal?.(!reservationFocusModal);

  return {
    searchBarFocusModal,
    setSearchBarFocusModal,
    isClicked,
    setClicked,
    clickModalFocus,
    closeModal,
    reservationFocusModal,
    clickReservationModal,
  };
}
