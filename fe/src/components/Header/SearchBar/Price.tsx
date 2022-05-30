import {
  CommonContainer,
  CommonButton,
  Label,
  InputState,
  StyledCrossIcon,
} from 'components/Header/SearchBar/searchBar.styled';

function Price() {
  return (
    <CommonContainer>
      <CommonButton aria-label="요금 입력 버튼">
        <Label>요금</Label>
        <InputState>₩100,000~1,000,000</InputState>
      </CommonButton>
      <button type="button" aria-label="요금 입력 취소 버튼">
        <StyledCrossIcon />
      </button>
    </CommonContainer>
  );
}

export default Price;
