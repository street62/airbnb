import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';

type range = {
  minPrice: number;
  maxPrice: number;
};

type State = {
  range: range;
  rangeText: string;
};

type Action = { type: 'SET_RANGE'; age: string };

type PriceDispatch = Dispatch<Action>;

const PriceStateContext = createContext<State | null>(null);
const PriceDispatchContext = createContext<PriceDispatch | null>(null);

const initState: State = {
  range: { minPrice: 0, maxPrice: 0 },
  rangeText: '금액대 설정',
};

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
    default:
      throw new Error();
  }
}

export function usePriceState() {
  const state = useContext(PriceStateContext);
  if (!state) throw new Error();

  return { range: state.range, rangeText: state.rangeText };
}

export function usePriceDispatch() {
  const dispatch = useContext(PriceDispatchContext);
  if (!dispatch) throw new Error();

  return dispatch;
}
