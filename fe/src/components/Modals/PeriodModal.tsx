import { usePeriodDispatch } from 'contexts/periodContext';
import styled from 'styled-components';
import { ReactComponent as LeftIcon } from 'images/FE_숙소예약서비스/Property 1=chevron-left.svg';
import { ReactComponent as RightIcon } from 'images/FE_숙소예약서비스/Property 1=chevron-right.svg';

import { ModalWrap } from './styled';

function PeriodModal() {
  const { setCheckIn, setCheckOut } = usePeriodDispatch();

  return (
    <PeriodModalWrap>
      <SlideBtnWrap>
        <PrevBtn />
        <ThisMonthTitle>이번달</ThisMonthTitle>
        <NextMonthTitle>다음달</NextMonthTitle>
        <NextBtn />
      </SlideBtnWrap>
      <Calendar>
        <ThisMonth>이번달</ThisMonth>
        <NextMonth>다음달</NextMonth>
      </Calendar>
    </PeriodModalWrap>
  );
}

const PeriodModalWrap = styled(ModalWrap)`
  width: 916px;
  height: 512px;
  padding: 64px 88px;
  flex-direction: column;
  /* display: none; */
`;
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
`;
const Calendar = styled.div`
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
// const CheckInBtn = styled.button``;
// const CheckOutBtn = styled(CheckInBtn)``;

export default PeriodModal;
