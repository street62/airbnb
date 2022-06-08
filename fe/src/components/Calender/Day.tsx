import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { usePeriodDispatch, usePeriodState } from 'hooks/usePeriod';

import { mockDate } from 'utils/util';

type DayProps = {
  date: Date;
  isThisMonth: boolean;
};

function Day({ date, isThisMonth }: DayProps) {
  const { setCheckIn, setCheckOut } = usePeriodDispatch();
  const isOver = new Date().getTime() > date.getTime();
  const state = usePeriodState();
  const [isClicked, setIsClicked] = useState(false);
  function showCirle() {
    state.checkIn.getTime() === date.getTime() || state.checkOut.getTime() === date.getTime()
      ? setIsClicked(true)
      : setIsClicked(false);
  }
  useEffect(() => {
    showCirle();
  }, []);
  function makingCheckInOut() {
    if (state.checkIn.getTime() === mockDate.getTime()) {
      setCheckIn(date);
    } else if (state.checkIn > date) {
      setCheckOut(state.checkIn);
      setCheckIn(date);
    } else if (state.checkIn < date) {
      setCheckOut(date);
    }
  }
  return !isThisMonth ? (
    <DayWrap isClicked={isClicked} disabled={isOver} />
  ) : (
    <DayWrap
      isClicked={isClicked}
      disabled={isOver}
      onClick={() => {
        makingCheckInOut();
      }}
    >
      {date.getDate()}
    </DayWrap>
  );
}
const DayWrap = styled.button<{ isClicked: boolean }>`
  background: ${({ isClicked }) => (isClicked ? `black` : `none`)};
  color: ${({ isClicked, disabled }) => {
    let color: string = '';
    if (disabled) {
      color = `#bdbdbd`;
    } else if (isClicked) {
      color = `#ffffff`;
    } else {
      color = `#000000`;
    }
    return color;
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 999px;
`;
export default Day;
