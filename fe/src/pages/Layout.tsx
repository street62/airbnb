import { Outlet } from 'react-router-dom';

import styled from 'styled-components';
import Header from 'components/Header/index';

import { ModalProvider } from 'contexts/ModalContext';

function Layout() {
  return (
    <ModalProvider>
      <Container>
        <Header />
        <Outlet />
      </Container>
    </ModalProvider>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
`;
export default Layout;
