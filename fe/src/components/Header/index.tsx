import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import styled, { css } from 'styled-components';
import { Link } from '@mui/material';

import SearchWrapper from 'components/Header/SearchWrapper';
import UserMenu from 'components/Header/UserMenu';

import { ReactComponent as LogoImg } from 'images/logo.svg';

type Position = {
  position: string;
};

function Header() {
  const location = useLocation();
  const path = location.pathname;

  const [miniFocus, setMiniFocus] = useState(true);
  const changeSearchBar = (e: React.MouseEvent<HTMLElement>) => setMiniFocus((focus) => !focus);

  return (
    <>
      <HeaderWrap position={path}>
        <Link href="/" style={{ height: '26px' }}>
          <LogoImg aria-label="로고이미지" />
        </Link>
        <SearchWrapper changeSearchBar={changeSearchBar} miniFocus={miniFocus} path={path} />
        <UserMenu />
      </HeaderWrap>
      {path === '/result' && !miniFocus && <HeaderOutSide onClick={changeSearchBar} />}
    </>
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
          background: ${({ theme }) => theme.colors.white};
        `
      : css`
          background: none;
        `};
  z-index: 1;
`;

const HeaderOutSide = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;

export default Header;
