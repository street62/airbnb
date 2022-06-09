import { ClickModal } from 'components/Header/SearchBar/';
import ResetButton from 'components/Header/SearchBar/common/ResetButton';
import InputButton from 'components/Header/SearchBar/common/InputButton';

import { usePersonnelDispatch, usePersonnelState } from 'hooks/usePersonnel';

function Personnel({ clickModal }: ClickModal) {
  const { personnelCounterText, counter } = usePersonnelState();
  const { resetCount } = usePersonnelDispatch();

  const COMPONENT_INFO = {
    id: 'PERSONNEL',
    title: '인원',
    inputText: personnelCounterText,
    ariaLabel: '게스트 추가 버튼',
    resetButtonLabel: '게스트 추가 취소 버튼',
  };

  const isNotInitValue = !counter.adult || !counter.child || !counter.toddler;

  const onClickEvent = (e: React.MouseEvent<HTMLElement>) => resetCount();

  return (
    <>
      <InputButton
        clickModal={clickModal}
        buttonInfo={COMPONENT_INFO}
        styleOptions={{ width: '124px' }}
      />
      {isNotInitValue && (
        <ResetButton ariaLabel={COMPONENT_INFO.resetButtonLabel} onClickEvent={onClickEvent} />
      )}
    </>
  );
}

export default Personnel;
