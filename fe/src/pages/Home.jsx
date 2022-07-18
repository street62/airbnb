import styled from 'styled-components';
import BackgroundSrc from 'images/FE_숙소예약서비스/hero-img.svg';

function Home() {
  return <BackgroundImg />;
}

const BackgroundImg = styled.div`
  width: 100%;
  height: 640px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  background-image: url(${BackgroundSrc});
`;
export default Home;
