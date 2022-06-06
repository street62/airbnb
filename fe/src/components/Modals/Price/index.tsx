import styled from 'styled-components';
import { ModalWrap } from 'components/Modals/styled';

import { toLocalString } from 'utils/helper';
import { usePriceState } from 'hooks/usePrice';

import Chart from './RangeChart';
import RangeSlider from './RangeSlider';

function PriceModal() {
  const { priceData, priceRange, dataPriceInfo, initSliderRange, setSliderRange } = usePriceState();

  const { min: minSliderValue, max: maxSliderValue } = initSliderRange;

  const minValue = priceRange.min === 0 ? minSliderValue : priceRange.min;
  const maxValue = priceRange.max === 0 ? maxSliderValue : priceRange.max;

  const currentPriceRange = { min: minValue, max: maxValue };

  return (
    <PriceModalWrap>
      <PriceInfo>
        <p className="price_title">가격 범위</p>
        <PriceRange>{`₩${toLocalString(minValue)} - ₩${toLocalString(maxValue)}`}</PriceRange>
        <p className="price_avg">{`평균 1박 요금은 ₩${toLocalString(
          dataPriceInfo.avg,
        )}원 입니다.`}</p>
      </PriceInfo>
      <SliderWrap>
        <Chart
          priceData={priceData}
          dataPriceInfo={dataPriceInfo}
          initSliderRange={initSliderRange}
          currentPriceRange={currentPriceRange}
        />
        <RangeSlider
          dataPriceInfo={dataPriceInfo}
          initSliderRange={initSliderRange}
          setSliderRange={setSliderRange}
        />
      </SliderWrap>
    </PriceModalWrap>
  );
}

const PriceModalWrap = styled(ModalWrap)`
  width: 493px;
  height: 364px;
  right: 200px;
  padding: 52px 64px;
  justify-content: space-around;
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

  ${({ theme }) => theme.fontStyles.normal18px}
`;

const SliderWrap = styled.div`
  height: 110px;
`;

export default PriceModal;
