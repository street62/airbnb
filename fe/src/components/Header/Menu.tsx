import styled from 'styled-components';
import { Breadcrumbs, Link } from '@mui/material';

function Menu() {
  return (
    <CustomBreadcrumbs separator="" aria-label="네비게이션 메뉴">
      <CustomLink href="/">숙소</CustomLink>
      <CustomLink href="/">체험</CustomLink>
      <CustomLink href="/">온라인 체험</CustomLink>
    </CustomBreadcrumbs>
  );
}

const CustomBreadcrumbs = styled(Breadcrumbs)`
  && {
    display: flex;
    justify-content: center;
    margin-bottom: 32px;
    border: none;
  }
`;

const CustomLink = styled(Link)`
  && {
    border: none;
    padding: 0 6px;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fontStyles.normal14px};
    text-decoration: none;

    &:hover {
      background: none;
      ${({ theme }) => theme.fontStyles.bold16px};
      text-decoration: underline;
    }
  }
`;

export default Menu;
