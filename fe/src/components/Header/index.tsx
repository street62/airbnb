import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import styled, { css } from 'styled-components';
import { Link } from '@mui/material';
import { ReactComponent as LogoImg } from 'images/logo.svg';

import SearchWrapper from './SearchWrapper';
import UserMenu from './UserMenu';

// type Router = '/' | '/result';

// type Router = '/' | '/result';

type Position = {
  position: string;
};

function Header() {
  const location = useLocation();
  const [miniFocus, setMiniFocus] = useState(true);

  const changeSearchBar = () => setMiniFocus((focus) => !focus);

  const path = location.pathname;

  return (
    <HeaderWrap position={path}>
      <Link href="/" style={{ height: '26px' }}>
        <LogoImg aria-label="로고이미지" />
      </Link>
<<<<<<< HEAD
      <SearchWrapper
        changeSearchBar={changeSearchBar}
        miniFocus={miniFocus}
        setMiniFocus={setMiniFocus}
        path={path}
      />
      <UserMenu />
=======
      {path === '/' ? (
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
>>>>>>> 6393f49d26b18f11e2d832f960bdac9b70c20313
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
  width: 1440px;
  margin-bottom: 20px;
  padding: 24px 32px;

  ${({ position }) =>
    position === '/result'
      ? css`
          border-bottom: 1px solid black;
          background: ${({ theme }) => theme.colors.white};
        `
      : css`
          background: none;
        `};
  z-index: 1;
`;

export default Header;
