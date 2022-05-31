import { useContext } from 'react';
import { ModalContext } from 'contexts/ModalContext';

import { Divider } from '@mui/material';
import {
  CommonContainer,
  CommonButton,
  Label,
  SelectedOption,
  StyledCrossIcon,
} from 'components/Header/SearchBar/searchBar.styled';

type PeriodProps = {
  clickModal: (e: React.MouseEvent<HTMLElement>) => void;
};

function Period() {
  const { clickModalFocus } = useContext(ModalContext);

  const clickModal = (e: React.MouseEvent<HTMLElement>) => {
    const option: string = 'CHECK';
    clickModalFocus?.(option);
  };

  return (
    <>
      <CheckIn clickModal={clickModal} />
      <Divider orientation="vertical" sx={{ height: '60%' }} />
      <CheckOut clickModal={clickModal} />
    </>
  );
}

function CheckIn({ clickModal }: PeriodProps) {
  return (
    <CommonContainer>
      <CommonButton
        onClick={clickModal}
        aria-label="체크인 날짜 입력 버튼"
        style={{ paddingLeft: '24px' }}
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

function CheckOut({ clickModal }: PeriodProps) {
  return (
    <CommonContainer>
      <CommonButton onClick={clickModal} aria-label="체크아웃 날짜 입력 버튼">
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
