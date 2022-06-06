import { createContext, Dispatch, ReactNode, useContext, useReducer, useState } from 'react';

import { toLocalString } from 'utils/helper';
import { prices as MOCK_PRICE_DATA } from 'mocks/hotelPrices';

type PriceRange = {
  min: number;
  max: number;
};

type State = {
  priceRange: PriceRange;
  priceRangeText: string;
};

type Action = { type: 'SET_RANGE'; payload: { [key: string]: number } };

type PriceDispatch = Dispatch<Action>;

const initState: State = {
  priceRange: { min: 0, max: 0 },
  priceRangeText: '금액대 설정',
};

const PriceStateContext = createContext<State>(initState);
const PriceDispatchContext = createContext<PriceDispatch | null>(null);

export function PriceProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(priceReducer, initState);

  return (
    <PriceStateContext.Provider value={state}>
      <PriceDispatchContext.Provider value={dispatch}>{children}</PriceDispatchContext.Provider>
    </PriceStateContext.Provider>
  );
}

function priceReducer(state: State, action: Action): State {
  const updateRangeText = `₩${toLocalString(action.payload.min)}~${toLocalString(
    action.payload.max,
  )}`;

  switch (action.type) {
    case 'SET_RANGE':
      return {
        priceRange: {
          min: action.payload.min,
          max: action.payload.max,
        },
        priceRangeText: updateRangeText,
      };
    default:
      throw new Error();
  }
}

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
