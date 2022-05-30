import styled from 'styled-components';
import {
  CommonButton,
  Label,
  InputState,
  StyledCrossIcon,
} from 'components/Header/SearchBar/searchBar.styled';

function Personnel() {
  return (
    <>
      <CommonButton aria-label="게스트 추가 버튼" style={{ width: '124px' }}>
        <Label>인원</Label>
        <PersonnelInputState>게스트 2명, 유아 2명</PersonnelInputState>
      </CommonButton>
      <button type="button" aria-label="게스트 추가 취소 버튼">
        <StyledCrossIcon />
      </button>
    </>
  );
}

const PersonnelInputState = styled(InputState)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default Personnel;
