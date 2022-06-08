import styled from 'styled-components';
import { Divider } from '@mui/material';

import { usePeriodState } from 'hooks/usePeriod';

import { toLocalString } from 'utils/helper';

function CostInfo({ info }: any) {
  const { checkIn, checkOut } = usePeriodState();
  const diffDate = checkIn.getTime() - checkOut.getTime();
  const reserveDays = Math.abs(diffDate / (1000 * 3600 * 24));

  const { cleaningFee, feePerOneNight, discountRate } = info;

  const reserveDaysCost = feePerOneNight * reserveDays;
  const discountCost = Math.floor(feePerOneNight * discountRate);
  const TotlaCost = toLocalString(reserveDaysCost - discountCost + cleaningFee);

  // 배열로 중복 피하도록 수정하기
  return (
    <InfoContainer>
      <CostWrap>
        <span>
          ₩{toLocalString(feePerOneNight)} x {reserveDays}박
        </span>
        <span>₩{toLocalString(reserveDaysCost)}</span>
      </CostWrap>
      <CostWrap>
        <span>{discountRate * 100}% 주단위 요금 할인</span>
        <span className="info_discount">-₩{toLocalString(discountCost)}</span>
      </CostWrap>
      <CostWrap>
        <span>청소비</span>
        <span>₩{toLocalString(cleaningFee)}</span>
      </CostWrap>
      <Divider sx={{ width: '100%', margin: '24px 0' }} />
      <TotalCost>
        <span>총 합계</span>
        <span>₩{TotlaCost}</span>
      </TotalCost>
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  width: 100%;
  margin-top: 24px;
  cursor: default;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CostWrap = styled(FlexBox)`
  margin: 8px 0;

  span {
    color: ${({ theme }) => theme.colors.grey2};
    ${({ theme }) => theme.fontStyles.normal16px};

    &:first-child {
      text-decoration: underline;
    }
  }

  .info_discount {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const TotalCost = styled(FlexBox)`
  color: ${({ theme }) => theme.colors.grey1};
  ${({ theme }) => theme.fontStyles.bold16px};

  span:first-child {
    text-decoration: underline;
  }
`;

export default CostInfo;
