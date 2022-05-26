import styled from 'styled-components';

export const ModalWrap = styled.div`
  margin-top: 16px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1), 0px 0px 4px rgba(51, 51, 51, 0.05);
`;
