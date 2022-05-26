import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';
import { Avatar, Link } from '@mui/material';
import { ReactComponent as HamburgerIcon } from 'images/FE_숙소예약서비스/Property 1=menu.svg';
import { ReactComponent as LogoImg } from 'images/logo.svg';

import Menu from 'components/Header/Menu';
import SearchBar from 'components/Header/SearchBar/index';
import SearchWrapper, { SearchWrap } from './SearchWrapper';

type Position = {
  position: string;
};

function Header() {
  const location = useLocation();
  const [miniFocus, setMiniFocus] = useState(true);

  const changeSearchBar = () => setMiniFocus((focus) => !focus);

  return (
    <HeaderWrap position={location.pathname}>
      <Link href="/" style={{ height: '26px' }}>
        <LogoImg aria-label="로고이미지" />
      </Link>
      {location.pathname === '/' ? (
        <SearchWrap>
          <Menu />
          <SearchBar />
        </SearchWrap>
      ) : (
        <SearchWrapper
          changeSearchBar={changeSearchBar}
          miniFocus={miniFocus}
          setMiniFocus={setMiniFocus}
        />
      )}
      <UserWrapper type="button" aria-label="유저 정보 메뉴">
        <Hamburger />
        <CustomAvatar src="images/FE_숙소예약서비스/Property 1=user.svg" />
      </UserWrapper>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header<Position>`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);

  margin-bottom: 20px;
  padding: 24px;
  width: 1440px;
`;

const UserWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 76px;
  height: 40px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.grey4};
  background: ${({ theme }) => theme.colors.white};
`;

const Hamburger = styled(HamburgerIcon)`
  width: 16px;
  height: 16px;

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
export default Header;
