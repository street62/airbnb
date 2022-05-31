import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';

type Period = {
  checkIn: string;
  checkOut: string;
};

type Action =
  | { type: 'SET_CHECK_IN'; checkIn: string }
  | { type: 'SET_CHECK_OUT'; checkOut: string };

type PeriodDispatch = Dispatch<Action>;
const PeriodStateContext = createContext<Period | null>(null);
const PeriodDispatchContext = createContext<PeriodDispatch | null>(null);
const initialState: Period = {
  checkIn: '',
  checkOut: '',
};

export function PeriodPriovider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PeriodStateContext.Provider value={state}>
      <PeriodDispatchContext.Provider value={dispatch}>{children}</PeriodDispatchContext.Provider>
    </PeriodStateContext.Provider>
  );
}

function reducer(state: Period, action: Action): Period {
  const date: Date = new Date();
  switch (action.type) {
    case 'SET_CHECK_IN':
      console.log(state);
      return {
        ...state,
        checkIn: date.toString(),
      };
    case 'SET_CHECK_OUT':
      console.log(state);
      return {
        ...state,
        checkOut: date.toString(),
      };
    default:
      throw new Error();
  }
}

export function usePeriodState() {
  const state = useContext(PeriodStateContext);
  if (!state) throw new Error();

  return { checkIn: state.checkIn, checkOut: state.checkOut };
}

export function usePeriodDispatch() {
  const dispatch = useContext(PeriodDispatchContext);
  if (!dispatch) throw new Error();

  const setCheckIn = (checkIn: string) => dispatch({ type: 'SET_CHECK_IN', checkIn });
  const setCheckOut = (checkOut: string) => dispatch({ type: 'SET_CHECK_OUT', checkOut });

  return { setCheckIn, setCheckOut };
}
