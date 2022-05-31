import { useState } from 'react';
import { usePeriodDispatch, usePeriodState } from 'contexts/periodContext';
import styled from 'styled-components';
import { ModalWrap } from './styled';

function PeriodModal() {
  const state = usePeriodState();
  const { setCheckIn, setCheckOut } = usePeriodDispatch();
  const [date, setDate] = useState('');
  return (
    <PeriodModalWrap>
      <CheckInBtn
        onClick={() => {
          setCheckIn(date.toString());
        }}
      >
        체크인:{state.checkIn}
      </CheckInBtn>
      <CheckOutBtn
        onClick={() => {
          setCheckOut(date.toString());
        }}
      >
        체크아웃:{state.checkOut}
      </CheckOutBtn>
    </PeriodModalWrap>
  );
}

const PeriodModalWrap = styled(ModalWrap)`
  width: 916px;
  height: 512px;
  /* display: none; */
`;
const CheckInBtn = styled.button``;
const CheckOutBtn = styled(CheckInBtn)``;
export default PeriodModal;
