import { usePersonnelDispatch, usePersonnelState } from 'contexts/PersonnelContext';

import styled from 'styled-components';
import { ReactComponent as PlusIcon } from 'images/FE_숙소예약서비스/Property 1=plus-circle.svg';
import { ReactComponent as MinusIcon } from 'images/FE_숙소예약서비스/Property 1=minus-circle.svg';
import { PersonnselInfo } from './PersonnelModal';

type InfoProps = {
  info: PersonnselInfo;
};

function PersonnelModalWrap({ info }: InfoProps) {
  const { counter } = usePersonnelState();
  const { increaseCount, decreaseCount } = usePersonnelDispatch();
  const [MAX, MIN] = [8, 0];
  function increaseCounter() {
    if (counter[info.desc] < MAX) {
      increaseCount(info.desc);
    }
  }
  function decreaseCounter() {
    if (counter[info.desc] > MIN) {
      decreaseCount(info.desc);
    }
  }
  return (
    <PersonnelModalWrapContainer>
      <PeopleInfo>
        <Title>{info.title}</Title>
        <Caption>{info.info}</Caption>
      </PeopleInfo>
      <CounterButtons>
        <StyledMinusIcon
          onClick={() => {
            decreaseCounter();
          }}
        />
        <span>{counter[info.desc]}</span>
        <StyledPlusIcon
          onClick={() => {
            increaseCounter();
          }}
        />
      </CounterButtons>
    </PersonnelModalWrapContainer>
  );
}
const PersonnelModalWrapContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const PeopleInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  ${({ theme }) => theme.fontStyles.bold16px}
`;
const Caption = styled.span`
  color: ${({ theme }) => theme.colors.grey3};
  ${({ theme }) => theme.fontStyles.normal14px}
`;

const CounterButtons = styled.div`
  display: flex;
  align-items: center;
  width: 116px;
  height: 36px;

  span {
    margin: 20px;
    ${({ theme }) => theme.fontStyles.bold20px}
  }
`;

const StyledMinusIcon = styled(MinusIcon)`
  width: 30px;
  height: 30px;

  path {
    stroke: ${({ theme }) => theme.colors.grey5};
  }
`;
const StyledPlusIcon = styled(PlusIcon)`
  width: 30px;
  height: 30px;

  path {
    stroke: ${({ theme }) => theme.colors.grey5};
  }
`;
export default PersonnelModalWrap;
