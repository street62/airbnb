import { log } from 'console';
import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';

type Period = {
  checkIn: string;
  checkOut: string;
};

type Action = { type: 'SET_CHECK_IN'; action: string } | { type: 'SET_CHECK_OUT'; action: string };

type PeriodDispatch = Dispatch<Action>;
const date = new Date();
const PeriodStateContext = createContext<Period | null>(null);
const PeriodDispatchContext = createContext<PeriodDispatch | null>(null);
const initialState: Period = {
  checkIn: date.toString(),
  checkOut: date.toString(),
};

export function PeriodPriovider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
}

function reducer(state: Period, action: Action): Period {
  switch (action.type) {
    case 'SET_CHECK_IN':
      console.log('체크인');

      return {
        checkIn: '체크인',
        checkOut: '',
      };
    case 'SET_CHECK_OUT':
      console.log('체크아웃');
      return {
        checkIn: '',
        checkOut: '체크아웃',
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

  const setCheckIn = (action: string) => dispatch({ type: 'SET_CHECK_IN', action });
  const setCheckOut = (action: string) => dispatch({ type: 'SET_CHECK_OUT', action });

  return { setCheckIn, setCheckOut };
}
