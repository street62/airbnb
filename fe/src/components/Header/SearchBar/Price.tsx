import { usePriceDispatch, usePriceState } from 'hooks/usePrice';

import { CommonContainer } from 'components/Header/SearchBar/searchBar.styled';
import ResetButton from './common/ResetButton';
import InputButton from './common/InputButton';

import { ClickModal } from '.';

function Price({ clickModal, isClicked, focusModal }: ClickModal) {
  const { priceRange, priceRangeText } = usePriceState();
  const { resetRange } = usePriceDispatch();

  const onClickEvent = (e: React.MouseEvent<HTMLElement>) => resetRange();

  const COMPONENT_INFO = {
    id: 'PRICE',
    title: '요금',
    inputText: priceRangeText,
    ariaLabel: '요금 입력 버튼',
    resetButtonLabel: '요금 입력 취소 버튼',
  };

  return (
    <CommonContainer isClicked={isClicked} focusModal={focusModal} id={COMPONENT_INFO.id}>
      <InputButton clickModal={clickModal} buttonInfo={COMPONENT_INFO} />
      {priceRange.min === 0 && priceRange.max === 0 && (
        <ResetButton ariaLabel={COMPONENT_INFO.resetButtonLabel} onClickEvent={onClickEvent} />
      )}
    </CommonContainer>
  );
}

export default Price;
