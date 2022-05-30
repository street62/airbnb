import { usePeriodDispatch } from 'contexts/periodContext';
import styled from 'styled-components';
import { ModalWrap } from './styled';

function PeriodModal() {
  const { setCheckIn, setCheckOut } = usePeriodDispatch();
  const date = new Date();

  return (
    <PeriodModalWrap>
      <CheckInBtn
        onClick={() => {
          setCheckIn('체크인');
        }}
      >
        체크인
      </CheckInBtn>
      <CheckOutBtn
        onClick={() => {
          setCheckOut('체크아웃');
        }}
      >
        체크아웃
      </CheckOutBtn>
    </PeriodModalWrap>
  );
}

const PeriodModalWrap = styled(ModalWrap)`
  width: 916px;
  height: 512px;
  display: none;
`;
const CheckInBtn = styled.button``;
const CheckOutBtn = styled(CheckInBtn)``;
export default PeriodModal;
