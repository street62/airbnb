import { Outlet } from 'react-router-dom';
import Header from 'components/Header/index';
import styled from 'styled-components';
import { ModalProvider } from 'contexts/ModalContext';
import { useRef } from 'react';

function Layout() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <ModalProvider>
      <Container ref={containerRef}>
        <Header containerRef={containerRef} />
        <Outlet />
      </Container>
    </ModalProvider>
  );
}

const Container = styled.div`
  position: relative;
`;
export default Layout;
