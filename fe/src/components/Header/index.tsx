import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import styled, { css } from 'styled-components';
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
<<<<<<< HEAD
=======

  margin-bottom: 20px;
  padding: 24px;
>>>>>>> c3e8218 (Refactor: PR 리뷰를 바탕으로 코드 수정)
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
export default Header;
