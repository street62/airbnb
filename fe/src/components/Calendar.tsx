import { usePeriodDispatch } from 'contexts/periodContext';
import { ReactComponent as LeftIcon } from 'images/FE_숙소예약서비스/Property 1=chevron-left.svg';
import { ReactComponent as RightIcon } from 'images/FE_숙소예약서비스/Property 1=chevron-right.svg';
import styled from 'styled-components';
import { getDays } from 'util/util';

type CalendarProps = {
  date: Date;
};

function Calendar({ date }: CalendarProps) {
  const days: Array<string> = ['일', '월', '화', '수', '목', '금', '토'];
  const month = date.getMonth();
  const thisMonth = date.getMonth() + 1;
  const nextMonth = thisMonth === 12 ? 1 : thisMonth + 1;
  const year: number = 2022;
  const thisDate: Date = new Date();
  const daysComp = days.map((day: string) => <WeekDay id={day}>{day}</WeekDay>); // useMemo 사용시 오류 발생, 타입스크립트문제? airbnb 디자인 페턴 문제?
  const calendarDays = getDays(month).map((day) => {
    return <Day key={day}>{day}</Day>;
  });
  const { setCheckIn, setCheckOut, setDate } = usePeriodDispatch();
  const monthAfterNext: number = 2;
  function increaseMonth() {
    setDate(new Date(year, month + monthAfterNext));
  }
  function decreaseMonth() {
    if (date > thisDate) setDate(new Date(year, month - monthAfterNext));
  }

  return (
    <>
      <SlideBtnWrap>
        <PrevBtn
          onClick={() => {
            decreaseMonth();
          }}
        />
        <MonthTitle>{thisMonth}월</MonthTitle>
        <MonthTitle>{nextMonth}월</MonthTitle>
        <NextBtn
          onClick={() => {
            increaseMonth();
          }}
        />
      </SlideBtnWrap>
      <CalendarWrap>
        <Month>
          <WeekDays>{daysComp}</WeekDays>
          <DaysWrap>{calendarDays}</DaysWrap>
        </Month>
        <Month>
          <WeekDays>{daysComp}</WeekDays>
          <DaysWrap>{calendarDays}</DaysWrap>
        </Month>
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
const Month = styled.div`
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
const DaysWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
`;
const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
`;
export default Calendar;
