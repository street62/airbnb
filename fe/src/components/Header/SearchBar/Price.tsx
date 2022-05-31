import { usePriceState } from 'contexts/PriceContext';

import {
  CommonContainer,
  CommonButton,
  Label,
  SelectedOption,
  StyledCrossIcon,
} from 'components/Header/SearchBar/searchBar.styled';
import { ClickModal } from '.';

function Price({ clickModal, isClicked, focusModal }: ClickModal) {
  const { rangeText } = usePriceState();

  const FILTER_ID = 'PRICE';

  return (
    <CommonContainer isClicked={isClicked} focusModal={focusModal} id={FILTER_ID}>
      <CommonButton onClick={clickModal} aria-label="요금 입력 버튼" id={FILTER_ID}>
        <Label>요금</Label>
        <SelectedOption>{rangeText}</SelectedOption>
      </CommonButton>
      {isClicked && focusModal === FILTER_ID && (
        <button type="button" aria-label="요금 입력 취소 버튼">
          <StyledCrossIcon />
        </button>
      )}
    </CommonContainer>
  );
}

export default Price;
