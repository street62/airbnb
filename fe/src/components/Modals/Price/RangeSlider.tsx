import { ChangeEvent, Dispatch } from 'react';
import styled from 'styled-components';
import PauseIcon from 'images/FE_숙소예약서비스/pause-circle.svg';

type PriceInfoType = {
  range: { [key: string]: number };
  sliderValue: { [key: string]: number };
  setSliderValue: { [key: string]: Dispatch<React.SetStateAction<number>> };
};

function RangeSlider({ range, sliderValue, setSliderValue }: PriceInfoType) {
  const leftChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setSliderValue.min(Number(e.target.value));
  };
  const RightChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setSliderValue.max(Number(e.target.value));
  };

  const STEP = 1000;

  return (
    <SliderWrap>
      <CustomInput
        type="range"
        min={range.min}
        max={range.max}
        step={STEP}
        value={sliderValue.min}
        onChange={leftChangeHandle}
      />
      <CustomInput
        type="range"
        min={range.min}
        max={range.max}
        step={STEP}
        value={sliderValue.max}
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
    cursor: pointer;
  }
`;

export default RangeSlider;
