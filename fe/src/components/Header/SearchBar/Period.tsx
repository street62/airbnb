import { Divider } from '@mui/material';
<<<<<<< HEAD
import { CommonContainer } from 'components/Header/SearchBar/searchBar.styled';
import { ClickModal } from '.';
import InputButton from './common/InputButton';
import ResetButton from './common/ResetButton';
=======
import {
  CommonContainer,
  CommonButton,
  Label,
  SelectedOption,
  StyledCrossIcon,
} from 'components/Header/SearchBar/searchBar.styled';
>>>>>>> 6393f49d26b18f11e2d832f960bdac9b70c20313

function Period({ clickModal, isClicked, focusModal }: ClickModal) {
  return (
    <>
<<<<<<< HEAD
      <CheckIn clickModal={clickModal} isClicked={isClicked} focusModal={focusModal} />
      {focusModal === '' && <Divider orientation="vertical" sx={{ height: '60%' }} />}
      <CheckOut clickModal={clickModal} isClicked={isClicked} focusModal={focusModal} />
=======
      <CommonContainer>
        <CommonButton aria-label="체크인 날짜 입력 버튼" style={{ paddingLeft: '24px' }}>
          <Label>체크인</Label>
          <SelectedOption>날짜 입력</SelectedOption>
        </CommonButton>
        <button type="button" aria-label="날짜 입력 취소 버튼">
          <StyledCrossIcon />
        </button>
      </CommonContainer>
      <Divider orientation="vertical" sx={{ height: '60%' }} />
      <CommonContainer>
        <CommonButton aria-label="체크아웃 날짜 입력 버튼">
          <Label>체크아웃</Label>
          <SelectedOption>날짜 입력</SelectedOption>
        </CommonButton>
        <button type="button" aria-label="날짜 입력 취소 버튼">
          <StyledCrossIcon />
        </button>
      </CommonContainer>
>>>>>>> 6393f49d26b18f11e2d832f960bdac9b70c20313
    </>
  );
}

function CheckIn({ clickModal, isClicked, focusModal }: ClickModal) {
  const FILTER_ID = 'CHECK_IN';
  const BUTTON_INFO = {
    id: FILTER_ID,
    title: '체크인',
    inputText: '날짜 입력',
    ariaLabel: '체크인 날짜 입력 버튼',
  };
  const RESET_BUTTON_ARIA_LABEL = '날짜 입력 취소 버튼';

  return (
    <CommonContainer isClicked={isClicked} focusModal={focusModal} id={FILTER_ID}>
      <InputButton
        clickModal={clickModal}
        buttonInfo={BUTTON_INFO}
        styleOptions={{ paddingLeft: '24px' }}
      />
      {isClicked && focusModal === FILTER_ID && <ResetButton ariaLabel={RESET_BUTTON_ARIA_LABEL} />}
    </CommonContainer>
  );
}

function CheckOut({ clickModal, isClicked, focusModal }: ClickModal) {
  const FILTER_ID = 'CHECK_OUT';
  const BUTTON_INFO = {
    id: FILTER_ID,
    title: '체크아웃',
    inputText: '날짜 입력',
    ariaLabel: '체크아웃 날짜 입력 버튼',
  };
  const RESET_BUTTON_ARIA_LABEL = '날짜 입력 취소 버튼';

  return (
    <CommonContainer isClicked={isClicked} focusModal={focusModal} id={FILTER_ID}>
      <InputButton clickModal={clickModal} buttonInfo={BUTTON_INFO} />
      {isClicked && focusModal === FILTER_ID && <ResetButton ariaLabel={RESET_BUTTON_ARIA_LABEL} />}
    </CommonContainer>
  );
}

export default Period;
