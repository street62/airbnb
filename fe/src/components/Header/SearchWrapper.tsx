import { Dispatch } from 'react';
import styled from 'styled-components';
import Menu from 'components/Header/Menu';
import MiniSearchBar from 'components/Header/SearchBar/MiniSearchBar';
import SearchBar from 'components/Header/SearchBar/';

type SearchWrapperType = {
  changeSearchBar: (e: React.MouseEvent<HTMLElement>) => void;
  miniFocus: boolean;
  path: string;
};

function SearchWrapper({ changeSearchBar, miniFocus, path }: SearchWrapperType) {
  return (
    <SearchWrap>
      {path === '/' || !miniFocus ? (
        <>
          <Menu />
          <SearchBar />
        </>
      ) : (
        <MiniSearchBar changeSearchBar={changeSearchBar} />
      )}
    </SearchWrap>
  );
}

export const SearchWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export default SearchWrapper;
