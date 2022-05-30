import {
  CommonContainer,
  CommonButton,
  Label,
  SelectedOption,
  StyledCrossIcon,
} from 'components/Header/SearchBar/searchBar.styled';

function Price() {
  return (
    <CommonContainer>
      <CommonButton aria-label="요금 입력 버튼">
        <Label>요금</Label>
        <SelectedOption>₩100,000~1,000,000</SelectedOption>
      </CommonButton>
      <button type="button" aria-label="요금 입력 취소 버튼">
        <StyledCrossIcon />
      </button>
    </CommonContainer>
  );
}

export default Price;
