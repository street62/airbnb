import { usePeriodDispatch } from 'contexts/periodContext';
import { ReactComponent as LeftIcon } from 'images/FE_숙소예약서비스/Property 1=chevron-left.svg';
import { ReactComponent as RightIcon } from 'images/FE_숙소예약서비스/Property 1=chevron-right.svg';
import styled from 'styled-components';

type CalendarProps = {
  month: number;
};

function Calendar({ month }: CalendarProps) {
  const { setCheckIn, setCheckOut, setMonth } = usePeriodDispatch();

  function increaseMonth() {
    setMonth(month + 2);
  }
  function decreaseMonth() {
    setMonth(month - 2);
  }
  return (
    <>
      <SlideBtnWrap>
        <PrevBtn
          onClick={() => {
            decreaseMonth();
          }}
        />
        <ThisMonthTitle>{month + 1}월</ThisMonthTitle>
        <NextMonthTitle>{month + 2}월</NextMonthTitle>
        <NextBtn
          onClick={() => {
            increaseMonth();
          }}
        />
      </SlideBtnWrap>
      <CalendarWrap>
        <ThisMonth>이번달</ThisMonth>
        <NextMonth>다음달</NextMonth>
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
const ThisMonthTitle = styled.div`
  width: 336px;
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.fontStyles.bold16px};
`;
const NextMonthTitle = styled(ThisMonthTitle)``;
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
`;
const NextMonth = styled(ThisMonth)``;
export default Calendar;
