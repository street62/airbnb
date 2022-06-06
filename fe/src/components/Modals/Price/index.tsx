import { useState } from 'react';

import styled from 'styled-components';
import { ModalWrap } from 'components/Modals/styled';

import { prices as MOCK_PRICE_DATA } from 'mocks/hotelPrices';
import { toLocalString } from 'utils/helper';

import Chart from './RangeChart';
import RangeSlider from './RangeSlider';

const priceInfo = (priceData: Array<number>) => {
  const minPrice = Math.min(...priceData);
  const maxPrice = Math.max(...priceData);
  const avgPrice = Math.floor(
    priceData.reduce((prev: number, curr: number) => prev + curr) / priceData.length,
  );

  return { minPrice, maxPrice, avgPrice };
};

function PriceModal() {
  const priceData = [...MOCK_PRICE_DATA].sort((a, b) => a - b);
  const { minPrice, maxPrice, avgPrice } = priceInfo(priceData);

  const [minSliderValue, setMinSliderValue] = useState<number>(minPrice);
  const [maxSliderValue, setMaxSliderValue] = useState<number>(maxPrice);

  const range = { min: minPrice, max: maxPrice };
  const sliderValue = { min: minSliderValue, max: maxSliderValue };
  const setSliderValue = { min: setMinSliderValue, max: setMaxSliderValue };

  return (
    <PriceModalWrap>
      <PriceInfo>
        <p className="price_title">가격 범위</p>
        <PriceRange>{`₩${toLocalString(minSliderValue)} - ₩${toLocalString(
          maxSliderValue,
        )}`}</PriceRange>
        <p className="price_avg">{`평균 1박 요금은 ₩${toLocalString(avgPrice)}원 입니다.`}</p>
      </PriceInfo>
      <SliderWrap>
        <Chart minPrice={minSliderValue} maxPrice={maxSliderValue} priceData={priceData} />
        <RangeSlider range={range} sliderValue={sliderValue} setSliderValue={setSliderValue} />
      </SliderWrap>
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

const SliderWrap = styled.div`
  height: 110px;
`;

export default PriceModal;
