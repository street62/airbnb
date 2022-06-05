import { ChangeEvent } from 'react';
import styled from 'styled-components';
import PauseIcon from 'images/FE_숙소예약서비스/pause-circle.svg';

type PriceInfoType = {
  minPrice: number;
  maxPrice: number;
};

function RangeSlider({ minPrice, maxPrice }: PriceInfoType) {
  const leftChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {};
  const RightChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {};

  return (
    <SliderWrap>
      <CustomInput
        type="range"
        min={minPrice}
        max={maxPrice}
        value={minPrice}
        onChange={leftChangeHandle}
      />
      <CustomInput
        type="range"
        min={minPrice}
        max={maxPrice}
        value={maxPrice}
        onChange={RightChangeHandle}
      />
    </SliderWrap>
  );
}

const SliderWrap = styled.div`
  position: relative;
  width: 100%;
`;

const CustomInput = styled.input.attrs({ type: 'range' })`
  position: absolute;
  z-index: 2;
  bottom: 6px;
  width: calc(100% + 24px);
  height: 100%;
  border-radius: 8px;
  background: none;
  transform: translateX(-8px);
  pointer-events: none;
  -webkit-appearance: none;

  ::-webkit-slider-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.grey1};
    background: ${({ theme }) => theme.colors.white};
    background-image: url(${PauseIcon});
    background-size: cover;
    pointer-events: all;
    -webkit-appearance: none;
  }
`;

export default RangeSlider;
