import { ChangeEvent } from 'react';
import styled, { css } from 'styled-components';

type PriceInfoType = {
  minPrice: number;
  maxPrice: number;
};

function RangeSlider({ minPrice, maxPrice }: PriceInfoType) {
  // 기능 구현중
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
      <Progress>
        <LeftThumb left={0} />
        <RightThumb right={0} />
      </Progress>
    </SliderWrap>
  );
}

const SliderWrap = styled.div`
  position: relative;
  width: 100%;
  height: 2px;
  border-radius: 8px;
  background: lightgray;
`;

const CustomInput = styled.input.attrs({ type: 'range' })`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: none;
  pointer-events: none;
  -webkit-appearance: none;
  opacity: 0;

  ::-webkit-slider-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    pointer-events: all;
    -webkit-appearance: none;
  }
`;

const Progress = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: black;
`;

const Thumb = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  top: -8px;
  border: 1px solid black;
  border-radius: 50%;
  background: white;
  cursor: pointer;
`;

type ThumbNum = { [key: string]: number };

const LeftThumb = styled(Thumb)<ThumbNum>`
  ${({ left }) =>
    css`
      left: ${left}%;
    `};
`;
const RightThumb = styled(Thumb)<ThumbNum>`
  ${({ right }) =>
    css`
      right: ${right}%;
    `};
`;

export default RangeSlider;
