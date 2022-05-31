import { usePersonnelState } from 'contexts/PersonnelContext';

import styled from 'styled-components';
import {
  CommonButton,
  Label,
  SelectedOption,
  StyledCrossIcon,
} from 'components/Header/SearchBar/searchBar.styled';
import { ClickModal } from '.';

function Personnel({ clickModal, isClicked, focusModal }: ClickModal) {
  const { counterText } = usePersonnelState();

  const FILTER_ID = 'PERSONNEL';

  return (
    <>
      <CommonButton
        onClick={clickModal}
        aria-label="게스트 추가 버튼"
        id={FILTER_ID}
        style={{ width: '124px' }}
      >
        <Label>인원</Label>
        <PersonnelSelectedOption>{counterText}</PersonnelSelectedOption>
      </CommonButton>
      {isClicked && focusModal === FILTER_ID && (
        <button type="button" aria-label="게스트 추가 취소 버튼">
          <StyledCrossIcon />
        </button>
      )}
    </>
  );
}

const PersonnelSelectedOption = styled(SelectedOption)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default Personnel;
