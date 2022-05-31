import { Outlet } from 'react-router-dom';
import Header from 'components/Header/index';
import styled from 'styled-components';
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
`;
export default Layout;
