import styled from 'styled-components';

import { ModalWrap } from 'components/Modals/styled';
import Calendar from 'components/Calender';

import { usePeriodState } from 'hooks/usePeriod';

function PeriodModal() {
  const state = usePeriodState();
  const thisDate: Date = state.date;
  return (
    <PeriodModalWrap>
      <Calendar date={thisDate} />
    </PeriodModalWrap>
  );
}

const PeriodModalWrap = styled(ModalWrap)`
  width: 916px;
  height: 512px;
  padding: 64px 88px;
  flex-direction: column;
`;

export default PeriodModal;
