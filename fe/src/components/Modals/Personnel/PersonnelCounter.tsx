import { useEffect } from 'react';

import { usePersonnelDispatch, usePersonnelState } from 'contexts/PersonnelContext';

import styled, { css } from 'styled-components';
import { ReactComponent as PlusIcon } from 'images/FE_숙소예약서비스/Property 1=plus-circle.svg';
import { ReactComponent as MinusIcon } from 'images/FE_숙소예약서비스/Property 1=minus-circle.svg';

import { PersonnselInfo } from 'components/Modals/Personnel/';

type InfoProps = {
  info: PersonnselInfo;
};

const [MAX_COUNTER, MIN_COUNTER] = [8, 0];

const makePersonnelText = (personnelInfo: { [key: string]: number }) => {
  const { adult, child, toddler } = personnelInfo;
  const guest = adult + child;

  if (!adult && !child && !toddler) {
    return '인원 선택';
  }

  if (!toddler) {
    return `게스트 ${guest}명`;
  }

  return `게스트 ${guest}명,유아 ${toddler}명`;
};

function PersonnelModalWrap({ info }: InfoProps) {
  const { counter } = usePersonnelState();
  const { increaseCount, decreaseCount, setPersonnelText } = usePersonnelDispatch();

  const increaseCounter = (e: React.MouseEvent<HTMLElement>) => {
    if (counter[info.desc] < MAX_COUNTER) {
      increaseCount(info.desc);
    }
  };

  const decreaseCounter = (e: React.MouseEvent<HTMLElement>) => {
    if (counter[info.desc] > MIN_COUNTER) {
      decreaseCount(info.desc);
    }
  };

  useEffect(() => {
    const personnelText = makePersonnelText(counter);
    setPersonnelText(personnelText);
  }, [counter]);

  return (
    <PersonnelCounter>
      <PeopleInfo>
        <Title>{info.title}</Title>
        <Caption>{info.info}</Caption>
      </PeopleInfo>
      <CounterButtons>
        <CounterButton onClick={decreaseCounter}>
          <StyledMinusIcon counter={counter[info.desc]} />
        </CounterButton>
        <span>{counter[info.desc]}</span>
        <CounterButton onClick={increaseCounter}>
          <StyledPlusIcon counter={counter[info.desc]} />
        </CounterButton>
      </CounterButtons>
    </PersonnelCounter>
  );
}

type Counter = {
  counter: number;
};

const PersonnelCounter = styled.div`
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

const CounterButton = styled.button`
  width: 30px;
  height: 30px;
`;

const StyledMinusIcon = styled(MinusIcon)<Counter>`
  width: 30px;
  height: 30px;

  ${({ counter }) =>
    counter === MIN_COUNTER
      ? css`
          path {
            stroke: ${({ theme }) => theme.colors.grey5};
          }
        `
      : css`
          path {
            stroke: ${({ theme }) => theme.colors.grey3};
          }
        `};
`;

const StyledPlusIcon = styled(PlusIcon)<Counter>`
  width: 30px;
  height: 30px;

  ${({ counter }) =>
    counter === MAX_COUNTER
      ? css`
          path {
            stroke: ${({ theme }) => theme.colors.grey5};
          }
        `
      : css`
          path {
            stroke: ${({ theme }) => theme.colors.grey3};
          }
        `};
`;
export default PersonnelModalWrap;
