import { Divider } from '@mui/material';
import {
  SearchBarWrap,
  SearchBarContainer,
  CommonContainer,
} from 'components/Header/SearchBar/searchBar.styled';

import Period from 'components/Header/SearchBar/Period';
import Personnel from 'components/Header/SearchBar/Personnel';
import Price from 'components/Header/SearchBar/Price';
import SearchButton from 'components/Header/SearchBar/SearchButton';

import PeriodModal from 'components/Modals/PeriodModal';
import PriceModal from 'components/Modals/PriceModal';
import PersonnelModal from 'components/Modals/PersonnelModal';

function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchBarWrap>
        <Period />
        <Divider orientation="vertical" sx={{ height: '60%' }} />
        <Price />
        <Divider orientation="vertical" sx={{ height: '60%' }} />
        <CommonContainer>
          <Personnel />
          <SearchButton />
        </CommonContainer>
      </SearchBarWrap>
      <PeriodModal />
      <PriceModal />
      <PersonnelModal />
    </SearchBarContainer>
  );
}

export default SearchBar;
