import { Divider } from '@mui/material';
import styled from 'styled-components';
import PersonnelModalWrap from './PersonnelModalWrap';

import { ModalWrap } from './styled';

function PersonnelModal() {
  const PERSONNEL_INFO = [
    { id: 1, title: '성인', info: '만 13세 이상' },
    { id: 2, title: '어린이', info: '만 2~12세' },
    { id: 3, title: '유아', info: '만 2세 미만' },
  ];

  const PersonnelInfo = PERSONNEL_INFO.map((info, index) => {
    return (
      <>
        <PersonnelModalWrap key={info.id} info={info} />
        {index !== PERSONNEL_INFO.length - 1 && <StyledDevider />}
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
  display: none;
  flex-direction: column;
`;

const StyledDevider = styled(Divider)`
<<<<<<< HEAD:fe/src/components/Modals/PersonnelModal.tsx
  && {
    width: 100%;
    margin: 24px 0;
  }
=======
  width: 100%;
  margin: 24px 0;
>>>>>>> c3e8218 (Refactor: PR 리뷰를 바탕으로 코드 수정):fe/src/components/Header/SearchBar/Modals/PersonnelModal.tsx
`;

export default PersonnelModal;
