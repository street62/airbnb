import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';

type PriceRange = {
  min: number;
  max: number;
};

type State = {
<<<<<<< HEAD
  range: range;
=======
  priceRange: PriceRange;
>>>>>>> 303ce0364d54770935d9d5df08bad72b80ab66d2
  priceRangeText: string;
};

type Action = { type: 'SET_RANGE'; age: string };

type PriceDispatch = Dispatch<Action>;

const PriceStateContext = createContext<State | null>(null);
const PriceDispatchContext = createContext<PriceDispatch | null>(null);

const initState: State = {
<<<<<<< HEAD
  range: { minPrice: 0, maxPrice: 0 },
=======
  priceRange: { min: 0, max: 0 },
>>>>>>> 303ce0364d54770935d9d5df08bad72b80ab66d2
  priceRangeText: '금액대 설정',
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

<<<<<<< HEAD
  return { range: state.range, priceRangeText: state.priceRangeText };
=======
  return { priceRange: state.priceRange, priceRangeText: state.priceRangeText };
>>>>>>> 303ce0364d54770935d9d5df08bad72b80ab66d2
}

// 내부에 함수 추가 예정
export function usePriceDispatch() {
  const dispatch = useContext(PriceDispatchContext);
  if (!dispatch) throw new Error();

  return dispatch;
}
