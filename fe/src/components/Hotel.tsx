import styled from 'styled-components';
import { ReactComponent as StarIcon } from 'images/FE_숙소예약서비스/Property 1=star.svg';
import { ReactComponent as HeartIcon } from 'images/FE_숙소예약서비스/Property 1=heart.svg';

function Hotel() {
  return (
    <HotelWrap>
      <HotelImg />
      <HotelInfo>
        <HotelInfoTop>
          <RocationAndTitle>
            <Rocation>주소</Rocation>
            <Title>이름</Title>
          </RocationAndTitle>
          <Heart />
        </HotelInfoTop>
        <HotelInfoBottom>
          <Point>
            <Star />
            <Grade>평점</Grade>
            <Review>후기 n개</Review>
          </Point>
          <Fee>
            <OneDayFee>하루에 얼마 / 박</OneDayFee>
            <TotalFee>총 얼마</TotalFee>
          </Fee>
        </HotelInfoBottom>
      </HotelInfo>
    </HotelWrap>
  );
}

const HotelWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 24px 0;
`;
const HotelImg = styled.img`
  width: 50%;
  height: 200px;
  border-radius: 10px;
`;
const HotelInfo = styled.div`
  width: 50%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const HotelInfoTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
const RocationAndTitle = styled.div`
  width: 50%;
`;
const Rocation = styled.div`
  ${({ theme }) => theme.fontStyles.normal12px};
  color: ${({ theme }) => theme.colors.grey2};
  margin-bottom: 8px;
`;
const Title = styled.div`
  ${({ theme }) => theme.fontStyles.normal14px}
`;
const Heart = styled(HeartIcon)`
  width: 20px;
  height: 20px;
`;
const HotelInfoBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const Point = styled.div`
  display: flex;
  height: 17px;
`;
const Star = styled(StarIcon)``;
const Grade = styled.div`
  ${({ theme }) => theme.fontStyles.normal12px}
`;
const Review = styled(Grade)`
  color: ${({ theme }) => theme.colors.grey3};
`;
const Fee = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
`;
const OneDayFee = styled.div`
  ${({ theme }) => theme.fontStyles.normal14px}
`;
const TotalFee = styled.div`
  ${({ theme }) => theme.fontStyles.normal12px}
  color: ${({ theme }) => theme.colors.grey3}
`;

export default Hotel;
