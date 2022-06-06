import { ChangeEvent, Dispatch, useRef } from 'react';
import styled from 'styled-components';
import PauseIcon from 'images/FE_숙소예약서비스/pause-circle.svg';

type PriceInfoType = {
  range: { [key: string]: number };
  sliderValue: { [key: string]: number };
  setSliderValue: { [key: string]: Dispatch<React.SetStateAction<number>> };
};

function RangeSlider({ range, sliderValue, setSliderValue }: PriceInfoType) {
  const STEP = 1000;
  const THUMB_GAP = 6;

  const processRef = useRef<HTMLDivElement>(null);
  const leftInput = useRef<HTMLInputElement>(null);
  const rightInput = useRef<HTMLInputElement>(null);

  const thumbPercent = (target: HTMLInputElement) => {
    const { value, min, max } = target;
    const percent = ((Number(value) - Number(min)) / (Number(max) - Number(min))) * 100;
    return percent;
  };

  const leftChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    if (rightInput.current === null || processRef.current === null) return;

    if (thumbPercent(e.target) > thumbPercent(rightInput.current) - THUMB_GAP) return;

    setSliderValue.min(Number(e.target.value));

    Object.assign(processRef.current.style, {
      left: `${thumbPercent(e.target)}%`,
      width: `${thumbPercent(rightInput.current) - thumbPercent(e.target)}%`,
    });
  };

  const RightChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    if (leftInput.current === null || processRef.current === null) return;

    if (thumbPercent(e.target) < thumbPercent(leftInput.current) + THUMB_GAP) return;

    setSliderValue.max(Number(e.target.value));

    Object.assign(processRef.current.style, {
      right: `${100 - thumbPercent(e.target)}%`,
      width: `${thumbPercent(e.target) - thumbPercent(leftInput.current)}%`,
    });
  };

  return (
    <SliderWrap>
      <Progress ref={processRef} />
      <CustomInput
        type="range"
        min={range.min}
        max={range.max}
        step={STEP}
        value={sliderValue.min}
        onChange={leftChangeHandle}
        ref={leftInput}
      />
      <CustomInput
        type="range"
        min={range.min}
        max={range.max}
        step={STEP}
        value={sliderValue.max}
        onChange={RightChangeHandle}
        ref={rightInput}
      />
    </SliderWrap>
  );
}

const SliderWrap = styled.div`
  position: relative;
  width: 100%;
`;

const Progress = styled.div`
  position: absolute;
  bottom: 5px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey1};
`;

const CustomInput = styled.input.attrs({ type: 'range' })`
  position: absolute;
  z-index: 2;
  bottom: 6px;
  width: calc(100% + 24px);
  height: 100%;
  border-radius: 8px;
  background: none;
  transform: translateX(-12px);
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
