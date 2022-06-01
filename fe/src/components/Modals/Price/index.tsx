import styled from 'styled-components';
import { ModalWrap } from 'components/Modals/styled';

import { prices as MOCK_PRICE_DATA } from 'mocks/hotelPrices';
import { toLocalString } from 'utils/helper';

const priceInfo = (priceData: Array<number>) => {
  const minPrice = priceData[0];
  const maxPrice = priceData[priceData.length - 1];
  const avgPrice = Math.floor(
    priceData.reduce((prev: number, curr: number) => prev + curr) / priceData.length,
  );

  return { minPrice, maxPrice, avgPrice };
};

function PriceModal() {
  const PRICE_DATA = [...MOCK_PRICE_DATA].sort((a, b) => a - b);
  const { minPrice, maxPrice, avgPrice } = priceInfo(PRICE_DATA);

  const priceRangeText = `₩${toLocalString(minPrice)} - ₩${toLocalString(maxPrice)}`;
  const avgPriceText = `평균 1박 요금은 ₩${toLocalString(avgPrice)}원 입니다.`;

  return (
    <PriceModalWrap>
      <PriceInfo>
        <p className="price_title">가격 범위</p>
        <PriceRange>{priceRangeText}</PriceRange>
        <p className="price_avg">{avgPriceText}</p>
      </PriceInfo>
      <div>범위 슬라이더</div>
    </PriceModalWrap>
  );
}

const PriceModalWrap = styled(ModalWrap)`
  width: 493px;
  height: 364px;
  right: 200px;
  padding: 52px 64px;
  justify-content: space-around;
  flex-direction: column;
`;

const PriceInfo = styled.div`
  width: 100%;

  .price_title {
    margin-bottom: 16px;
    ${({ theme }) => theme.fontStyles.bold16px}
  }

  .price_avg {
    color: ${({ theme }) => theme.colors.grey3};
    ${({ theme }) => theme.fontStyles.normal14px}
  }
`;

const PriceRange = styled.div`
  margin-bottom: 4px;

  ${({ theme }) => theme.fontStyles.normal18px}
`;

export default PriceModal;
