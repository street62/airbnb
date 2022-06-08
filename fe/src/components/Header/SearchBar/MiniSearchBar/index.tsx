import { useEffect } from 'react';

import styled from 'styled-components';
import { Divider } from '@mui/material';
import { StyledSearchIcon } from 'components/Header/SearchBar/searchBar.styled';

import { usePeriodDispatch, usePeriodState } from 'hooks/usePeriod';
import { usePersonnelState } from 'hooks/usePersonnel';
import { usePriceState } from 'hooks/usePrice';

import { makeDateString, mockDate } from 'utils/util';

type MyProps = {
  changeSearchBar: (e: React.MouseEvent<HTMLElement>) => void;
};

function MiniSearchBar({ changeSearchBar }: MyProps) {
  const { personnelCounterText } = usePersonnelState();
  const { priceRangeText } = usePriceState();
  const { checkIn, checkOut, periodText } = usePeriodState();
  const { setPeriodText } = usePeriodDispatch();
  function makePeriodString() {
    const isCheckInState = checkIn.getTime() === mockDate.getTime();
    const isCheckOutState = checkOut.getTime() === mockDate.getTime();

    if (!isCheckInState && !isCheckOutState) {
      const [checkInString, checkOutString] = [makeDateString(checkIn), makeDateString(checkOut)];
      const periodString = `${checkInString} ~ ${checkOutString}`;
      setPeriodText(periodString);
    }
  }
  useEffect(() => {
    makePeriodString();
  }, [checkIn, checkOut]);

  return (
    <MiniSearchBarWrap onClick={changeSearchBar}>
      <MiniBarButton aria-label="일정 입력 버튼">{periodText}</MiniBarButton>
      <Divider orientation="vertical" sx={{ margin: '8px' }} />
      <PriceButton aria-label="요금 입력 버튼">{priceRangeText}</PriceButton>
      <Divider orientation="vertical" sx={{ margin: '8px' }} />
      <MiniBarButton aria-label="인원 입력 버튼">{personnelCounterText}</MiniBarButton>
      <MiniSearchBtn type="button" aria-label="결과 찾기 버튼">
        <MiniSearchIcon />
      </MiniSearchBtn>
    </MiniSearchBarWrap>
  );
}

const MiniSearchBarWrap = styled.div`
  margin: 0 auto;
  min-width: 410px;
  height: 48px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 999px;
  padding: 8px 8px 8px 24px;
  border: 1px solid ${({ theme }) => theme.colors.grey4};
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 13px 2px rgba(51, 51, 51, 0.29);
  }
`;

const MiniSearchBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-left: 8px;
  padding-top: 5px;
  background: ${({ theme }) => theme.colors.primary};
`;

const MiniBarButton = styled.div`
  ${({ theme }) => theme.fontStyles.normal16px};
  color: ${({ theme }) => theme.colors.grey3};
`;

const PriceButton = styled(MiniBarButton)`
  color: ${({ theme }) => theme.colors.grey3};
`;

const MiniSearchIcon = styled(StyledSearchIcon)`
  width: 16px;
  height: 16px;
`;

export default MiniSearchBar;
