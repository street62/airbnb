import styled from 'styled-components';

import InputButton from 'components/Header/SearchBar/common/InputButton';

import { usePeriodState } from 'contexts/periodContext';
import { usePersonnelState } from 'contexts/PersonnelContext';

import { makeDateString } from 'utils/util';

function ReservationInfo() {
  const { personnelCounterText } = usePersonnelState();
  const { checkIn, checkOut } = usePeriodState();

  const clickModal = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.currentTarget.dataset.id);
  };

  const COMPONENTS_INFO = [
    {
      id: 'CHECK_IN',
      title: '체크인',
      inputText: makeDateString(checkIn),
      ariaLabel: '체크인 날짜 변경 버튼',
    },
    {
      id: 'CHECK_OUT',
      title: '체크아웃',
      inputText: makeDateString(checkOut),
      ariaLabel: '체크아웃 날짜 변경 버튼',
    },
    {
      id: 'PERSONNEL',
      title: '인원',
      inputText: personnelCounterText,
      ariaLabel: '게스트 변경 버튼',
    },
  ];

  const InputButtons = COMPONENTS_INFO.map((info) => {
    return <InputButton key={info.id} clickModal={clickModal} buttonInfo={info} />;
  });

  return <InfoContainer>{InputButtons}</InfoContainer>;
}

export default ReservationInfo;

const InfoContainer = styled.div`
  display: grid;
  border: 1px solid ${({ theme }) => theme.colors.grey4};
  border-radius: 10px;

  button {
    padding: 10px;

    &:first-child {
      border-right: 1px solid ${({ theme }) => theme.colors.grey4};
    }

    &:nth-child(2) {
      grid-column: 2 / 3;
    }

    &:nth-child(3) {
      grid-column: 1 / 3;
      border-top: 1px solid ${({ theme }) => theme.colors.grey4};
    }
  }
`;
