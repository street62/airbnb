import { usePriceDispatch, usePriceState } from 'hooks/usePrice';

import { CommonContainer } from 'components/Header/SearchBar/searchBar.styled';
import ResetButton from './common/ResetButton';
import InputButton from './common/InputButton';

import { ClickModal } from '.';

function Price({ clickModal, isClicked, focusModal }: ClickModal) {
  const { priceRange, priceRangeText } = usePriceState();
  const { resetRange } = usePriceDispatch();

  const FILTER_ID = 'PRICE';
  const BUTTON_INFO = {
    id: FILTER_ID,
    title: '요금',
    inputText: priceRangeText,
    ariaLabel: '요금 입력 버튼',
  };
  const RESET_BUTTON_ARIA_LABEL = '요금 입력 취소 버튼';

  const isDefalutValue = () => {
    return priceRange.min === 0 && priceRange.max === 0;
  };

  const onClickEvent = (e: React.MouseEvent<HTMLElement>) => {
    resetRange();
  };

  return (
    <CommonContainer isClicked={isClicked} focusModal={focusModal} id={FILTER_ID}>
      <InputButton clickModal={clickModal} buttonInfo={BUTTON_INFO} />
      {isDefalutValue() === false && (
        <ResetButton ariaLabel={RESET_BUTTON_ARIA_LABEL} onClickEvent={onClickEvent} />
      )}
    </CommonContainer>
  );
}

export default Price;
