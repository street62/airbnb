import { usePeriodState } from 'contexts/periodContext';
import Calendar from 'components/Calendar';
import styled from 'styled-components';
import { ModalWrap } from './styled';

function PeriodModal() {
  const state = usePeriodState();
  const thisMonth: number = state.month;
  return (
    <PeriodModalWrap>
      <Calendar month={thisMonth} />
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

// const CheckInBtn = styled.button``;
// const CheckOutBtn = styled(CheckInBtn)``;

export default PeriodModal;
