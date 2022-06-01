<<<<<<< HEAD
import { usePersonnelState } from 'contexts/PersonnelContext';

import { ClickModal } from '.';
import ResetButton from './common/ResetButton';
import InputButton from './common/InputButton';

function Personnel({ clickModal, isClicked, focusModal }: ClickModal) {
  const { counterText } = usePersonnelState();

  const FILTER_ID = 'PERSONNEL';
  const BUTTON_INFO = {
    id: FILTER_ID,
    title: '인원',
    inputText: counterText,
    ariaLabel: '게스트 추가 버튼',
  };
  const RESET_BUTTON_ARIA_LABEL = '게스트 추가 취소 버튼';

  return (
    <>
      <InputButton
        clickModal={clickModal}
        buttonInfo={BUTTON_INFO}
        styleOptions={{ width: '124px' }}
      />
      {isClicked && focusModal === FILTER_ID && <ResetButton ariaLabel={RESET_BUTTON_ARIA_LABEL} />}
=======
import styled from 'styled-components';
import {
  CommonButton,
  Label,
  SelectedOption,
  StyledCrossIcon,
} from 'components/Header/SearchBar/searchBar.styled';

import { usePersonnelState } from 'contexts/PersonnelContext';

function Personnel() {
  const { counterText } = usePersonnelState();

  return (
    <>
      <CommonButton aria-label="게스트 추가 버튼" style={{ width: '124px' }}>
        <Label>인원</Label>
        <PersonnelSelectedOption>{counterText}</PersonnelSelectedOption>
      </CommonButton>
      <button type="button" aria-label="게스트 추가 취소 버튼">
        <StyledCrossIcon />
      </button>
>>>>>>> 6393f49d26b18f11e2d832f960bdac9b70c20313
    </>
  );
}

<<<<<<< HEAD
=======
const PersonnelSelectedOption = styled(SelectedOption)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

>>>>>>> 6393f49d26b18f11e2d832f960bdac9b70c20313
export default Personnel;
