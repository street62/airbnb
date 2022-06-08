import React, { Fragment } from 'react';

import styled from 'styled-components';
import { Divider } from '@mui/material';

import Hotel from 'components/HotelList/Hotel';
import SkeletonHotel from 'components/Skeleton/Hotel';

import { useModal } from 'hooks/useModal';

import { keyMaker } from 'utils/util';
import Reservation from 'components/Modals/Reservation';

function HotelList() {
  const { focusModal, clickModalFocus } = useModal();

  const SEARCH_FILTER = [
    '300개 이상의 숙소',
    '5월 12일 - 5월 18일',
    '₩100,000~₩1,000,000',
    '게스트 3명',
  ];

  const searchFilter = SEARCH_FILTER.map((result, index) => {
    const key = keyMaker();
    return (
      <Fragment key={key}>
        <FilterText>{result}</FilterText>
        {index !== SEARCH_FILTER.length - 1 && <FilterText>ㆍ</FilterText>}
      </Fragment>
    );
  });

  const onClickEvent = (e: React.MouseEvent<HTMLDivElement>) => {
    const MODAL_ID = 'reservation';
    clickModalFocus(MODAL_ID);
  };

  return (
    <>
      <HotelListWrap>
        {searchFilter}
        <TypographyH2>지도에서 선택한 지역의 숙소</TypographyH2>
        <Hotel onClickEvent={onClickEvent} />
        <StyledDevider />
        <SkeletonHotel />
      </HotelListWrap>
      {focusModal !== '' && <Reservation />}
    </>
  );
}

const HotelListWrap = styled.div`
  width: 50%;
  height: 100%;
  max-width: 732px;
  padding: 24px 32px 0 32px;
`;

const TypographyH2 = styled.h2`
  ${({ theme }) => theme.fontStyles.bold24px};
  margin-bottom: 32px;
`;

const FilterText = styled.span`
  ${({ theme }) => theme.fontStyles.normal12px};
`;

const StyledDevider = styled(Divider)`
  && {
    width: 100%;
    margin: 24px 0;
  }
`;

export default HotelList;
