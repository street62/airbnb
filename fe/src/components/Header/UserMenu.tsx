import styled from 'styled-components';
import { Avatar } from '@mui/material';
import { ReactComponent as HamburgerIcon } from 'images/FE_숙소예약서비스/Property 1=menu.svg';
import LoginModal from 'components/Modals/Login';
import { useState } from 'react';

function UserMenu() {
  const login: boolean = true;
  const [clicked, setClicked] = useState(false);
  function changeModalStatus() {
    setClicked(!clicked);
  }
  return (
    <>
      <UserWrapper
        type="button"
        aria-label="유저 정보 메뉴"
        onClick={() => {
          changeModalStatus();
        }}
      >
        <Hamburger />
        <CustomAvatar src="images/FE_숙소예약서비스/Property 1=user.svg" />
      </UserWrapper>
      <LoginModal login={login} isClicked={clicked} />
    </>
  );
}

const UserWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 40px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.grey4};
  background: ${({ theme }) => theme.colors.white};
`;

const Hamburger = styled(HamburgerIcon)`
  width: 16px;
  height: 16px;
  margin: 0 8px 0 10px;

  path {
    stroke: ${({ theme }) => theme.colors.black};
  }
`;

const CustomAvatar = styled(Avatar)`
  && {
    width: 32px;
    height: 32px;
    background: ${({ theme }) => theme.colors.grey3};
  }
`;

export default UserMenu;
