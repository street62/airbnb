import { Divider } from '@mui/material';
import {
  CommonContainer,
  CommonButton,
  Label,
  InputState,
  StyledCrossIcon,
} from 'components/Header/SearchBar/searchBar.styled';

function Period() {
  return (
    <>
      <CommonContainer>
        <CommonButton aria-label="체크인 날짜 입력 버튼" style={{ paddingLeft: '24px' }}>
          <Label>체크인</Label>
          <InputState>날짜 입력</InputState>
        </CommonButton>
        <button type="button" aria-label="날짜 입력 취소 버튼">
          <StyledCrossIcon />
        </button>
      </CommonContainer>
      <Divider orientation="vertical" sx={{ height: '60%' }} />
      <CommonContainer>
        <CommonButton aria-label="체크아웃 날짜 입력 버튼">
          <Label>체크아웃</Label>
          <InputState>날짜 입력</InputState>
        </CommonButton>
        <button type="button" aria-label="날짜 입력 취소 버튼">
          <StyledCrossIcon />
        </button>
      </CommonContainer>
    </>
  );
}

export default Period;
