import { usePersonnelState } from 'contexts/PersonnelContext';

import { ClickModal } from 'components/Header/SearchBar/';
import ResetButton from 'components/Header/SearchBar/common/ResetButton';
import InputButton from 'components/Header/SearchBar/common/InputButton';

function Personnel({ clickModal, isClicked, focusModal }: ClickModal) {
  const { personnelCounterText, counter } = usePersonnelState();

  const COMPONENT_INFO = {
    id: 'PERSONNEL',
    title: '인원',
    inputText: personnelCounterText,
    ariaLabel: '게스트 추가 버튼',
    resetButtonLabel: '게스트 추가 취소 버튼',
  };

  const isNotInitValue = counter.adult !== 0 || counter.child !== 0 || counter.toddler !== 0;

  return (
    <>
      <InputButton
        clickModal={clickModal}
        buttonInfo={COMPONENT_INFO}
        styleOptions={{ width: '124px' }}
      />
      {isNotInitValue && <ResetButton ariaLabel={COMPONENT_INFO.resetButtonLabel} />}
    </>
  );
}

export default Personnel;
