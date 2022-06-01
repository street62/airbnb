import { usePeriodDispatch } from 'contexts/periodContext';
import { ReactComponent as LeftIcon } from 'images/FE_숙소예약서비스/Property 1=chevron-left.svg';
import { ReactComponent as RightIcon } from 'images/FE_숙소예약서비스/Property 1=chevron-right.svg';
import { useMemo } from 'react';
import styled from 'styled-components';
import { getDays } from 'util/getDays';

type CalendarProps = {
  month: number;
};

function Calendar({ month }: CalendarProps) {
  const days: Array<string> = ['일', '월', '화', '수', '목', '금', '토'];
  const year: number = new Date().getFullYear();
  getDays(year, month);
  const daysComp = days.map((day: string) => <WeekDay id={day}>{day}</WeekDay>); // useMemo 사용시 오류 발생, 타입스크립트문제? airbnb 디자인 페턴 문제?

  const { setCheckIn, setCheckOut, setMonth } = usePeriodDispatch();
  const monthAfterNext: number = 2;
  function increaseMonth() {
    const november: number = 10;
    if (month < november) setMonth(month + monthAfterNext);
  }
  function decreaseMonth() {
    const january: number = 0;
    if (month > january) setMonth(month - monthAfterNext);
  }
  return (
    <>
      <SlideBtnWrap>
        <PrevBtn
          onClick={() => {
            decreaseMonth();
          }}
        />
        <MonthTitle>{month + 1}월</MonthTitle>
        <MonthTitle>{month + 2}월</MonthTitle>
        <NextBtn
          onClick={() => {
            increaseMonth();
          }}
        />
      </SlideBtnWrap>
      <CalendarWrap>
        <ThisMonth>
          <WeekDays>{daysComp}</WeekDays>
          <DaysWrap>day</DaysWrap>
        </ThisMonth>
        <NextMonth>
          <WeekDays>{daysComp}</WeekDays>
          <DaysWrap>day</DaysWrap>
        </NextMonth>
      </CalendarWrap>
    </>
  );
}

const SlideBtnWrap = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 24px;
`;
const PrevBtn = styled(LeftIcon)`
  position: absolute;
`;
const MonthTitle = styled.div`
  width: 336px;
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.fontStyles.bold16px};
`;
const NextBtn = styled(RightIcon)`
  position: absolute;
  right: 0;
  cursor: pointer;
`;
const CalendarWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const ThisMonth = styled.div`
  width: 336px;
  height: 336px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const WeekDays = styled.div`
  width: 100%;
  display: flex;
`;
const WeekDay = styled.div`
  width: 48px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.fontStyles.normal12px}
  color : ${({ theme }) => theme.colors.grey3}
`;
const NextMonth = styled(ThisMonth)``;
const DaysWrap = styled.div`
  width: 100%;
  border: 1px solid black;
  display: grid;
  grid-auto-columns: 48px;
  grid-auto-rows: 48px;
`;
const Day = styled.div``;
export default Calendar;
