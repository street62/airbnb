import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';

type Period = {
  month: number;
  checkIn: string;
  checkOut: string;
};

type Action =
  | { type: 'SET_CHECK_IN'; action: string }
  | { type: 'SET_CHECK_OUT'; action: string }
  | { type: 'SET_MONTH'; month: number };

type PeriodDispatch = Dispatch<Action>;
const date = new Date();
const monthData: number = date.getMonth();
const PeriodStateContext = createContext<Period | null>(null);
const PeriodDispatchContext = createContext<PeriodDispatch | null>(null);
const initialState: Period = {
  month: monthData,
  checkIn: date.toString(),
  checkOut: date.toString(),
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
  switch (action.type) {
    case 'SET_CHECK_IN':
      console.log('체크인');
      return {
        ...state,
        checkIn: '체크인',
        checkOut: '',
      };
    case 'SET_CHECK_OUT':
      console.log('체크아웃');
      return {
        ...state,
        checkIn: '',
        checkOut: '체크아웃',
      };
    case 'SET_MONTH':
      return {
        ...state,
        month: action.month,
      };
    default:
      throw new Error();
  }
}

export function usePeriodState() {
  const state = useContext(PeriodStateContext);
  if (!state) throw new Error();

  return { checkIn: state.checkIn, checkOut: state.checkOut, month: state.month };
}

export function usePeriodDispatch() {
  const dispatch = useContext(PeriodDispatchContext);
  if (!dispatch) throw new Error();

  const setCheckIn = (action: string) => dispatch({ type: 'SET_CHECK_IN', action });
  const setCheckOut = (action: string) => dispatch({ type: 'SET_CHECK_OUT', action });
  const setMonth = (month: number) => dispatch({ type: 'SET_MONTH', month });
  return { setCheckIn, setCheckOut, setMonth };
}
