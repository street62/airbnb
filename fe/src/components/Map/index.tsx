import styled from 'styled-components';
import { Checkbox, ButtonGroup, Button } from '@mui/material';

import { ReactComponent as PlusIcon } from 'images/FE_숙소예약서비스/plus.svg';
import { ReactComponent as MinusIcon } from 'images/FE_숙소예약서비스/minus.svg';

function Map() {
  return (
    <MapContainer>
      <MoveMapCheck>
        <StyledCheckbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }} />
        <span>지도를 움직이며 검색하기</span>
      </MoveMapCheck>
      <MapLevelButtons orientation="vertical" aria-label="지도 확대 축소 버튼">
        <StyledButton aria-label="지도 확대 버튼">
          <PlusIcon />
        </StyledButton>
        <StyledButton aria-label="지도 축소 버튼">
          <MinusIcon />
        </StyledButton>
      </MapLevelButtons>
    </MapContainer>
  );
}

const MapContainer = styled.div`
  width: 50%;
  height: 90vh;
  background: skyblue;
  position: relative;
`;

const MoveMapCheck = styled.div`
  position: absolute;
  top: 32px;
  left: 50%;
  transform: translate(-50%, 0);

  width: 212px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.grey1};
  ${({ theme }) => theme.fontStyles.normal14px};
`;

const StyledCheckbox = styled(Checkbox)`
  path {
    fill: ${({ theme }) => theme.colors.grey2};
  }
`;

const MapLevelButtons = styled(ButtonGroup)`
  position: absolute;
  top: 32px;
  right: 32px;
`;

const StyledButton = styled(Button)`
  && {
    width: 20px;
    padding: 6px;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.grey1};
    border: 1px solid ${({ theme }) => theme.colors.grey5};

    &:hover {
      background: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.grey5};
    }
  }
`;

export default Map;
