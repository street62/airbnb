import { useContext, useState } from 'react';

import { prices as MOCK_PRICE_DATA } from 'mocks/hotelPrices';
import { PriceDispatchContext, PriceRange, PriceStateContext } from 'contexts/PriceContext';

const priceInfo = (priceData: Array<number>) => {
  const minPrice = Math.min(...priceData);
  const maxPrice = Math.max(...priceData);
  const avgPrice = Math.floor(
    priceData.reduce((prev: number, curr: number) => prev + curr) / priceData.length,
  );

  return { minPrice, maxPrice, avgPrice };
};

export function usePriceState() {
  const state = useContext(PriceStateContext);
  if (!state) throw new Error();

  const priceData = [...MOCK_PRICE_DATA].sort((a, b) => a - b);
  const { minPrice, maxPrice, avgPrice } = priceInfo(priceData);

  const [minSliderValue, setMinSliderValue] = useState<number>(minPrice);
  const [maxSliderValue, setMaxSliderValue] = useState<number>(maxPrice);

  const dataPriceInfo = { min: minPrice, max: maxPrice, avg: avgPrice };
  const initSliderRange = { min: minSliderValue, max: maxSliderValue };
  const setSliderRange = { min: setMinSliderValue, max: setMaxSliderValue };

  return {
    priceData,
    dataPriceInfo,
    priceRange: state.priceRange,
    priceRangeText: state.priceRangeText,
    initSliderRange,
    setSliderRange,
  };
}

export function usePriceDispatch() {
  const dispatch = useContext(PriceDispatchContext);
  if (!dispatch) throw new Error();

  const setRange = (range: PriceRange) => {
    dispatch({
      type: 'SET_RANGE',
      payload: range,
    });
  };

  return { setRange };
}
