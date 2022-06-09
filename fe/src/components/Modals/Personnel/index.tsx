import { Fragment } from 'react';

import { Divider } from '@mui/material';
import styled from 'styled-components';

import { keyMaker } from 'utils/util';

import { ModalWrap } from 'components/Modals/styled';
import PersonnelModalWrap from 'components/Modals/Personnel/PersonnelCounter';

export type PersonnselInfo = {
  title: string;
  info: string;
  desc: string;
};

function PersonnelModal() {
  const PERSONNEL_INFO = [
    { title: '성인', info: '만 13세 이상', desc: 'adult' },
    { title: '어린이', info: '만 2~12세', desc: 'child' },
    { title: '유아', info: '만 2세 미만', desc: 'toddler' },
  ];

  const PersonnelInfo = PERSONNEL_INFO.map((info: PersonnselInfo, index: number) => {
    const fragmentKey = keyMaker();

    return (
      <Fragment key={fragmentKey}>
        <PersonnelModalWrap info={info} />
        {index !== PERSONNEL_INFO.length - 1 && <StyledDivider />}
      </Fragment>
    );
  });

  return <PersonnelModalContainer>{PersonnelInfo}</PersonnelModalContainer>;
}

const PersonnelModalContainer = styled(ModalWrap)`
  width: 400px;
  height: 355px;
  right: 0;
  padding: 64px;
  display: flex;
  flex-direction: column;
`;

const StyledDivider = styled(Divider)`
  && {
    width: 100%;
    margin: 24px 0;
  }
`;

export default PersonnelModal;
