import { usePersonnelState } from 'contexts/PersonnelContext';

import styled from 'styled-components';
import {
  CommonButton,
  Label,
  SelectedOption,
  StyledCrossIcon,
} from 'components/Header/SearchBar/searchBar.styled';
import { ClickModal } from '.';

function Personnel({ clickModal }: ClickModal) {
  const { counterText } = usePersonnelState();

  return (
    <>
      <CommonButton
        onClick={clickModal}
        aria-label="게스트 추가 버튼"
        id="PERSONNEL"
        style={{ width: '124px' }}
      >
        <Label>인원</Label>
        <PersonnelSelectedOption>{counterText}</PersonnelSelectedOption>
      </CommonButton>
      <button type="button" aria-label="게스트 추가 취소 버튼">
        <StyledCrossIcon />
      </button>
    </>
  );
}

const PersonnelSelectedOption = styled(SelectedOption)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default Personnel;
