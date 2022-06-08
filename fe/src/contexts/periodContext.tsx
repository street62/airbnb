import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';
import { mockDate } from 'utils/util';

type CheckInOut = {
  checkIn: Date;
  checkOut: Date;
};
type Period = {
  date: Date;
  checkInOut: CheckInOut;
  periodText: string;
};

type Action =
  | { type: 'SET_CHECK_IN'; checkIn: Date }
  | { type: 'SET_CHECK_OUT'; checkOut: Date }
  | { type: 'SET_DATE'; date: Date }
  | { type: 'RESET_DATE'; payload: null }
  | { type: 'SET_TEXT'; text: string };

type PeriodDispatch = Dispatch<Action>;

const thisDate = new Date();

const PeriodStateContext = createContext<Period | null>(null);
const PeriodDispatchContext = createContext<PeriodDispatch | null>(null);

const initialState: Period = {
  date: thisDate,
  checkInOut: {
    checkIn: mockDate,
    checkOut: mockDate,
  },
  periodText: '일정 입력',
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
      return {
        ...state,
        checkInOut: {
          ...state.checkInOut,
          checkIn: action.checkIn,
        },
      };
    case 'SET_CHECK_OUT':
      return {
        ...state,
        checkInOut: {
          ...state.checkInOut,
          checkOut: action.checkOut,
        },
      };
    case 'SET_DATE':
      return {
        ...state,
        date: action.date,
      };
    case 'RESET_DATE':
      return { ...initialState };
    case 'SET_TEXT':
      return {
        ...state,
        periodText: action.text,
      };
    default:
      throw new Error();
  }
}

export function usePeriodState() {
  const state = useContext(PeriodStateContext);
  if (!state) throw new Error();

  return {
    checkIn: state.checkInOut.checkIn,
    checkOut: state.checkInOut.checkOut,
    date: state.date,
    periodText: state.periodText,
  };
}

export function usePeriodDispatch() {
  const dispatch = useContext(PeriodDispatchContext);
  if (!dispatch) throw new Error();

  const setCheckIn = (checkIn: Date) => dispatch({ type: 'SET_CHECK_IN', checkIn });
  const setCheckOut = (checkOut: Date) => dispatch({ type: 'SET_CHECK_OUT', checkOut });
  const setDate = (date: Date) => dispatch({ type: 'SET_DATE', date });
  const resetDate = () => dispatch({ type: 'RESET_DATE', payload: null });
  const setPeriodText = (text: string) => dispatch({ type: 'SET_TEXT', text });

  return { setCheckIn, setCheckOut, setDate, resetDate, setPeriodText };
}
