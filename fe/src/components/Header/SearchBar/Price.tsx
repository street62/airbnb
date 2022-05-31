import { usePriceState } from 'contexts/PriceContext';

import {
  CommonContainer,
  CommonButton,
  Label,
  SelectedOption,
  StyledCrossIcon,
} from 'components/Header/SearchBar/searchBar.styled';
import { ClickModal } from '.';

function Price({ clickModal }: ClickModal) {
  const { rangeText } = usePriceState();

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
