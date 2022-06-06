import { Divider } from '@mui/material';
import styled from 'styled-components';
import { keyMaker } from 'utils/util';
import PersonnelModalWrap from './PersonnelModalWrap';
import { ModalWrap } from './styled';

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
    const [key1, key2] = [keyMaker(), keyMaker()];
    return (
      <>
        <PersonnelModalWrap key={key1} info={info} />
        {index !== PERSONNEL_INFO.length - 1 && <StyledDevider key={key2} />}
      </>
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

const StyledDevider = styled(Divider)`
  && {
    width: 100%;
    margin: 24px 0;
  }
`;

export default PersonnelModal;
