import { ModalContext } from 'contexts/ModalContext';
import { usePriceState } from 'contexts/PriceContext';
import { useContext } from 'react';

import {
  CommonContainer,
  CommonButton,
  Label,
  SelectedOption,
  StyledCrossIcon,
} from 'components/Header/SearchBar/searchBar.styled';

function Price() {
  const { rangeText } = usePriceState();
  const { clickModalFocus } = useContext(ModalContext);

  const clickModal = (e: React.MouseEvent<HTMLElement>) => {
    const ID: string = e.currentTarget.id;
    clickModalFocus?.(ID);
  };

  return (
    <CommonContainer>
      <CommonButton onClick={clickModal} aria-label="요금 입력 버튼" id="PRICE">
        <Label>요금</Label>
        <SelectedOption>{rangeText}</SelectedOption>
      </CommonButton>
      <button type="button" aria-label="요금 입력 취소 버튼">
        <StyledCrossIcon />
      </button>
    </CommonContainer>
  );
}

export default Price;
