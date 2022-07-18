import { Skeleton } from '@mui/material';
import styled from 'styled-components';

function SkeletonHotel() {
  return (
    <SkeletonContainer>
      <Skeleton variant="rectangular" animation="wave" width={330} height={200} />
      <div>
        <Skeleton width={134} animation="wave" />
        <Skeleton width={268} animation="wave" />
        <Skeleton width={268} animation="wave" />
      </div>
    </SkeletonContainer>
  );
}

const SkeletonContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export default SkeletonHotel;
