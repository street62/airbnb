import HotelList from 'components/HotelList';
import Map from 'components/Map';
import styled from 'styled-components';

function Result() {
  return (
    <ResultContainer>
      <HotelList />
      <Map />
    </ResultContainer>
  );
}

const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 97px;
  width: 100%;
  min-width: 1440px;
`;

export default Result;
