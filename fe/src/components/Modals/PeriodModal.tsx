import styled from 'styled-components';
import { ModalWrap } from './styled';

function PeriodModal() {
  return <PeriodModalWrap>기간모달</PeriodModalWrap>;
}

const PeriodModalWrap = styled(ModalWrap)`
  width: 916px;
  height: 512px;
  display: none;
`;
export default PeriodModal;
