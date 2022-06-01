import { usePeriodDispatch } from 'contexts/periodContext';
import { ReactComponent as LeftIcon } from 'images/FE_숙소예약서비스/Property 1=chevron-left.svg';
import { ReactComponent as RightIcon } from 'images/FE_숙소예약서비스/Property 1=chevron-right.svg';
import styled from 'styled-components';
<<<<<<< HEAD
=======
import { getDays } from 'util/getDays';
>>>>>>> 6393f49d26b18f11e2d832f960bdac9b70c20313

type CalendarProps = {
  month: number;
};

function Calendar({ month }: CalendarProps) {
  const days: Array<string> = ['일', '월', '화', '수', '목', '금', '토'];
<<<<<<< HEAD
  const daysComp = days.map((day) => {
    return <Day>{day}</Day>;
  });
  const { setCheckIn, setCheckOut, setMonth } = usePeriodDispatch();

  function increaseMonth() {
    if (month < 10) setMonth(month + 2);
  }
  function decreaseMonth() {
    if (month > 0) setMonth(month - 2);
=======
  const year: number = new Date().getFullYear();
  getDays(year, month);
  const daysComp = days.map((day: string) => {
    return <WeekDay>{day}</WeekDay>;
  });
  const { setCheckIn, setCheckOut, setMonth } = usePeriodDispatch();
  const monthAfterNext: number = 2;
  function increaseMonth() {
    const november: number = 10;
    if (month < november) setMonth(month + monthAfterNext);
  }
  function decreaseMonth() {
    const january: number = 0;
    if (month > january) setMonth(month - monthAfterNext);
>>>>>>> 6393f49d26b18f11e2d832f960bdac9b70c20313
  }
  return (
    <>
      <SlideBtnWrap>
        <PrevBtn
          onClick={() => {
            decreaseMonth();
          }}
        />
<<<<<<< HEAD
        <ThisMonthTitle>{month + 1}월</ThisMonthTitle>
        <NextMonthTitle>{month + 2}월</NextMonthTitle>
=======
        <MonthTitle>{month + 1}월</MonthTitle>
        <MonthTitle>{month + 2}월</MonthTitle>
>>>>>>> 6393f49d26b18f11e2d832f960bdac9b70c20313
        <NextBtn
          onClick={() => {
            increaseMonth();
          }}
        />
      </SlideBtnWrap>
      <CalendarWrap>
<<<<<<< HEAD
        <ThisMonth>{daysComp}</ThisMonth>
        <NextMonth>다음달</NextMonth>
=======
        <ThisMonth>
          <WeekDays> {daysComp}</WeekDays>
          <DaysWrap>day</DaysWrap>
        </ThisMonth>
        <NextMonth>
          <WeekDays> {daysComp}</WeekDays>
          <DaysWrap>day</DaysWrap>
        </NextMonth>
>>>>>>> 6393f49d26b18f11e2d832f960bdac9b70c20313
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
<<<<<<< HEAD
const ThisMonthTitle = styled.div`
=======
const MonthTitle = styled.div`
>>>>>>> 6393f49d26b18f11e2d832f960bdac9b70c20313
  width: 336px;
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.fontStyles.bold16px};
`;
<<<<<<< HEAD
const NextMonthTitle = styled(ThisMonthTitle)``;
=======
>>>>>>> 6393f49d26b18f11e2d832f960bdac9b70c20313
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
<<<<<<< HEAD
`;
const Day = styled.div`
=======
  flex-direction: column;
`;
const WeekDays = styled.div`
  width: 100%;
  display: flex;
`;
const WeekDay = styled.div`
>>>>>>> 6393f49d26b18f11e2d832f960bdac9b70c20313
  width: 48px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.fontStyles.normal12px}
  color : ${({ theme }) => theme.colors.grey3}
`;
const NextMonth = styled(ThisMonth)``;
<<<<<<< HEAD
=======
const DaysWrap = styled.div`
  width: 100%;
  border: 1px solid black;
  display: grid;
  grid-auto-columns: 48px;
  grid-auto-rows: 48px;
`;
const Day = styled.div``;
>>>>>>> 6393f49d26b18f11e2d832f960bdac9b70c20313
export default Calendar;
