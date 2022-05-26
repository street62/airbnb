import styled from 'styled-components';
import { Divider } from '@mui/material';
import { StyledSearchIcon, Btn } from 'components/Header/SearchBar/searchBar.styled';

type MyProps = {
  changeSearchBar: () => void;
};

function MiniSearchBar({ changeSearchBar }: MyProps) {
  return (
    <MiniSearchBarWrap onClick={changeSearchBar}>
      <MiniBarButton aria-label="일정 입력 버튼">일정 입력</MiniBarButton>
      <Divider orientation="vertical" />
      <PriceButton aria-label="요금 입력 버튼">₩100,000~1,000,000</PriceButton>
      <Divider orientation="vertical" />
      <MiniBarButton aria-label="인원 입력 버튼">인원 입력</MiniBarButton>
      <MiniSearchBtn type="button" aria-label="결과 찾기 버튼">
        <MiniSearchIcon />
      </MiniSearchBtn>
    </MiniSearchBarWrap>
  );
}

const MiniSearchBarWrap = styled.div`
  width: 410px;
  height: 48px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 999px;
  padding: 8px 8px 8px 24px;
  border: 1px solid ${({ theme }) => theme.colors.grey4};
`;

const MiniSearchBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  padding-top: 5px;
  background: ${({ theme }) => theme.colors.primary};
`;

const MiniBarButton = styled(Btn)`
  color: ${({ theme }) => theme.colors.grey3};
`;

const PriceButton = styled(MiniBarButton)`
  color: ${({ theme }) => theme.colors.grey3};
`;

const MiniSearchIcon = styled(StyledSearchIcon)`
  width: 16px;
  height: 16px;
`;

export default MiniSearchBar;