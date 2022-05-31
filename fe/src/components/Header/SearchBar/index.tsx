import { useContext } from 'react';
import { ModalContext } from 'contexts/ModalContext';

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
import PersonnelModal from 'components/Modals/PersonnelModal';
import PriceModal from 'components/Modals/PriceModal';

function SearchBar() {
  const { focusModal } = useContext(ModalContext);

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
      {focusModal !== '' && <FocusModal focus={focusModal} />}
    </SearchBarContainer>
  );
}

function FocusModal({ focus }: any) {
  switch (focus) {
    case 'CHECK':
      return <PeriodModal />;
    case 'PERSONNEL':
      return <PersonnelModal />;
    case 'PRICE':
      return <PriceModal />;
    default:
      throw Error();
  }
}

export default SearchBar;
