import { createContext, Dispatch, ReactNode, useReducer } from 'react';

import { toLocalString } from 'utils/helper';

export type PriceRange = {
  min: number;
  max: number;
};

type State = {
  priceRange: PriceRange;
  priceRangeText: string;
};

type Action =
  | { type: 'SET_RANGE'; payload: { [key: string]: number } }
  | { type: 'RESET'; payload: null };

type PriceDispatch = Dispatch<Action>;

const initState: State = {
  priceRange: { min: 0, max: 0 },
  priceRangeText: '금액대 설정',
};

export const PriceStateContext = createContext<State>(initState);
export const PriceDispatchContext = createContext<PriceDispatch | null>(null);

export function PriceProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(priceReducer, initState);

  return (
    <PriceStateContext.Provider value={state}>
      <PriceDispatchContext.Provider value={dispatch}>{children}</PriceDispatchContext.Provider>
    </PriceStateContext.Provider>
  );
}

function priceReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_RANGE':
      // eslint-disable-next-line no-case-declarations
      const updateRangeText = `₩${toLocalString(action.payload.min)}~${toLocalString(
        action.payload.max,
      )}`;

      return {
        priceRange: {
          min: action.payload.min,
          max: action.payload.max,
        },
        priceRangeText: updateRangeText,
      };
    case 'RESET':
      return { ...initState };
    default:
      throw new Error();
  }
}
