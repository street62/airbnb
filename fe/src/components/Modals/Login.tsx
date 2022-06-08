import styled from 'styled-components';

import { Divider } from '@mui/material';

type LoginModalType = {
  login: boolean;
  isClicked: boolean;
};

function LoginModal({ login, isClicked }: LoginModalType) {
  return (
    <LoginModalWrap click={isClicked}>
      {login ? (
        <LoginSuccessWrap>
          <SuccessContent>예약 취소</SuccessContent>
          <StyledDivider />
          <SuccessContent>위시리스트</SuccessContent>
          <StyledDivider />
          <SuccessContent>로그아웃</SuccessContent>
        </LoginSuccessWrap>
      ) : (
        '로그인'
      )}
    </LoginModalWrap>
  );
}

const LoginModalWrap = styled.div<{ click: boolean }>`
  display: ${({ click }) => (click ? 'block' : 'none')};
  position: absolute;
  width: 200px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1), 0px 0px 4px rgba(51, 51, 51, 0.05);
  border-radius: 10px;
  padding: 32px;
  right: 30px;
  top: 68px;
  ${({ theme }) => theme.fontStyles.normal16px};
`;
const LoginSuccessWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

const SuccessContent = styled.div`
  ${({ theme }) => theme.fontStyles.normal16px};
`;

const StyledDivider = styled(Divider)`
  && {
    width: 100%;
  }
`;
export default LoginModal;
