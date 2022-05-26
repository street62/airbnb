import styled from 'styled-components';
import { ModalWrap } from './styled';

function PriceModal() {
  return (
    <PriceModalWrap>
      <PriceInfo>
        <p className="price_title">가격 범위</p>
        <PriceRange>
          <span>₩100,000</span>
          <span> - </span>
          <span>₩1,000,000+</span>
        </PriceRange>
        <p className="price_avg">평균 1박 요금은 ₩500,000원 입니다.</p>
      </PriceInfo>
      <div>범위 슬라이더</div>
    </PriceModalWrap>
  );
}

const PriceModalWrap = styled(ModalWrap)`
  width: 493px;
  height: 364px;
  display: none;
  right: 200px;
  padding: 52px 64px;
  justify-content: left;
  flex-direction: column;
`;

const PriceInfo = styled.div`
  width: 100%;

  .price_title {
    margin-bottom: 16px;
    ${({ theme }) => theme.fontStyles.bold16px}
  }

  .price_avg {
    color: ${({ theme }) => theme.colors.grey3};
    ${({ theme }) => theme.fontStyles.normal14px}
  }
`;

const PriceRange = styled.div`
  margin-bottom: 4px;

  span {
    ${({ theme }) => theme.fontStyles.normal18px}
  }
`;

export default PriceModal;
