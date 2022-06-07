import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import styled, { css } from 'styled-components';
import { Link } from '@mui/material';
import { ReactComponent as LogoImg } from 'images/logo.svg';

import SearchWrapper from 'components/Header/SearchWrapper';
import UserMenu from 'components/Header/UserMenu';

// type Router = '/' | '/result';

type Position = {
  position: string;
};

function Header({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> | null }) {
  const location = useLocation();
  const path = location.pathname;

  const [miniFocus, setMiniFocus] = useState(true);
  const changeSearchBar = (e: React.MouseEvent<HTMLElement>) => setMiniFocus((focus) => !focus);

  const headerRef = useRef<HTMLDivElement>(null);
  const onClickEvent = ({ target }: MouseEvent) => {
    if (!miniFocus && !headerRef.current?.contains(target as HTMLElement)) {
      setMiniFocus(true);
    }
  };

  // 모달 외부 영역 클릭시 miniSearchbar로 돌아오도록 한다.
  useEffect(() => {
    const parentContainer = containerRef?.current;

    // undefind를 반환하지 않으면 가장 마지막에 있는 return 문에서 Arrow function expected no return value. 라는 에러가 뜬다.
    if (!parentContainer) return undefined;
    parentContainer.addEventListener('mousedown', onClickEvent);

    return () => parentContainer.removeEventListener('mousedown', onClickEvent);
  }, [containerRef]);

  return (
    <HeaderWrap position={path} ref={headerRef}>
      <Link href="/" style={{ height: '26px' }}>
        <LogoImg aria-label="로고이미지" />
      </Link>
      <SearchWrapper changeSearchBar={changeSearchBar} miniFocus={miniFocus} path={path} />
      <UserMenu />
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
