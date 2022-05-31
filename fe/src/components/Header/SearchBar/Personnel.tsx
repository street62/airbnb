import { useContext } from 'react';
import { usePersonnelState } from 'contexts/PersonnelContext';
import { ModalContext } from 'contexts/ModalContext';

import styled from 'styled-components';
import {
  CommonButton,
  Label,
  SelectedOption,
  StyledCrossIcon,
} from 'components/Header/SearchBar/searchBar.styled';

function Personnel() {
  const { counterText } = usePersonnelState();
  const { clickModalFocus } = useContext(ModalContext);

  const ClickModal = (e: React.MouseEvent<HTMLElement>) => {
    const option: string = 'PERSONNEL';
    clickModalFocus?.(option);
  };

  return (
    <>
      <CommonButton onClick={ClickModal} aria-label="게스트 추가 버튼" style={{ width: '124px' }}>
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
