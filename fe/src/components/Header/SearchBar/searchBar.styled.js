import styled from 'styled-components';
import { ReactComponent as SearchIcon } from 'images/FE_숙소예약서비스/Property 1=search.svg';
import { ReactComponent as CrossIcon } from 'images/FE_숙소예약서비스/Property 1=x-circle.svg';

export const SearchBarContainer = styled.div`
  position: relative;
`;

export const SearchBarWrap = styled.div`
  display: flex;
  align-items: center;
  width: 916px;
  height: 76px;
  border: 1px solid ${({ theme }) => theme.colors.grey4};
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.white};
`;

export const CommonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  border-radius: 999px;
  padding: 0px 24px;
  flex-grow: 1;

  &:hover {
    background: ${({ theme }) => theme.colors.grey6};
  }

  /* props로 넘겨받도록 수정 */
  &.focus {
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 0px 13px 2px rgba(51, 51, 51, 0.29);
  }
`;

export const CommonButton = styled.button`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
`;

export const Label = styled.span`
  display: inline-block;
  margin-bottom: 4px;
  ${({ theme }) => theme.fontStyles.bold12px};
`;

export const InputState = styled.span`
  width: 100%;
  text-align: left;
  color: ${({ theme }) => theme.colors.grey2};
  ${({ theme }) => theme.fontStyles.normal16px};
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  height: 42px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.primary};

  span {
    margin: 0 8px;
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fontStyles.bold18px};
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  path {
    stroke: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledCrossIcon = styled(CrossIcon)`
  path {
    fill: ${({ theme }) => theme.colors.grey6};
  }

  &:hover {
    path {
      fill: ${({ theme }) => theme.colors.grey5};
    }
  }
`;
