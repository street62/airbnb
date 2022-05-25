import styled from 'styled-components';
import { Breadcrumbs, Link } from '@material-ui/core';

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
  margin: 0 auto;
  margin-bottom: 32px;
  border: none;
`;

const CustomLink = styled(Link)`
  border: none;
  padding: 0 6px;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fontStyles.normal14px};

  &:hover {
    background: none;
    ${({ theme }) => theme.fontStyles.bold16px};
    text-decoration: none;
  }
`;

export default Menu;
