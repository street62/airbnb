import { Divider } from '@mui/material';
import {
  CommonContainer,
  CommonButton,
  Label,
  SelectedOption,
  StyledCrossIcon,
} from 'components/Header/SearchBar/searchBar.styled';
import { ClickModal } from '.';

function Period({ clickModal }: ClickModal) {
  return (
    <>
      <CheckIn clickModal={clickModal} />
      <Divider orientation="vertical" sx={{ height: '60%' }} />
      <CheckOut clickModal={clickModal} />
    </>
  );
}

function CheckIn({ clickModal }: ClickModal) {
  return (
    <CommonContainer>
      <CommonButton
        onClick={clickModal}
        aria-label="체크인 날짜 입력 버튼"
        style={{ paddingLeft: '24px' }}
        id="CHECK_IN"
      >
        <Label>체크인</Label>
        <SelectedOption>날짜 입력</SelectedOption>
      </CommonButton>
      <button type="button" aria-label="날짜 입력 취소 버튼">
        <StyledCrossIcon />
      </button>
    </CommonContainer>
  );
}

function CheckOut({ clickModal }: ClickModal) {
  return (
    <CommonContainer>
      <CommonButton onClick={clickModal} aria-label="체크아웃 날짜 입력 버튼" id="CHECK_OUT">
        <Label>체크아웃</Label>
        <SelectedOption>날짜 입력</SelectedOption>
      </CommonButton>
      <button type="button" aria-label="날짜 입력 취소 버튼">
        <StyledCrossIcon />
      </button>
    </CommonContainer>
  );
}

export default Period;
