import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';
import { Divider } from '@mui/material';

import Hotel from 'components/HotelList/Hotel';
import Reservation from 'components/Modals/Reservation';
import SkeletonHotel from 'components/Skeleton/Hotel';

import { useModal } from 'hooks/useModal';
import { useGetFetch } from 'hooks/useFetch';

import { keyMaker } from 'utils/util';

export type InfoProps = {
  [key: string]: string | number | undefined;
  imgUrl: string;
  feePerOneNight: number;
};

function HotelList() {
  const { reservationFocusModal, clickReservationModal } = useModal();

  const location = useLocation();
  const URL = `http://csq-alb-313771881.ap-northeast-2.elb.amazonaws.com:8080/accommodations${location.search}`;

  const { fetchedData, loading } = useGetFetch(URL);

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
    clickReservationModal(reservationFocusModal);
  };

  const hotels = fetchedData?.map((info: InfoProps) => {
    return (
      <Fragment key={info.id}>
        <Hotel onClickEvent={onClickEvent} info={info} />
        <StyledDevider />
      </Fragment>
    );
  });

  return (
    <>
      <HotelListWrap>
        {searchFilter}
        <TypographyH2>지도에서 선택한 지역의 숙소</TypographyH2>
        <List>{loading ? <SkeletonHotel /> : hotels}</List>
      </HotelListWrap>
      {reservationFocusModal && <Reservation />}
    </>
  );
}

const HotelListWrap = styled.div`
  width: 50%;
  height: 90vh;
  max-width: 732px;
  padding: 24px 32px 0 32px;
`;

const List = styled.div`
  height: calc(90vh - 108px);
  padding-right: 20px;
  overflow: auto;
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
