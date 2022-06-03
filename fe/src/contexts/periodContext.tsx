import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';

type CheckInOut = {
  checkIn: string;
  checkOut: string;
};
type Period = {
  date: Date;
  checkInOut: CheckInOut;
};

type Action =
  | { type: 'SET_CHECK_IN'; checkIn: string }
  | { type: 'SET_CHECK_OUT'; checkOut: string }
  | { type: 'SET_DATE'; date: Date };

type PeriodDispatch = Dispatch<Action>;
const thisDate = new Date();
const PeriodStateContext = createContext<Period | null>(null);
const PeriodDispatchContext = createContext<PeriodDispatch | null>(null);
const initialState: Period = {
  date: thisDate,
  checkInOut: {
    checkIn: thisDate.toString(),
    checkOut: thisDate.toString(),
  },
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
  };
}

export function usePeriodDispatch() {
  const dispatch = useContext(PeriodDispatchContext);
  if (!dispatch) throw new Error();

  const setCheckIn = (checkIn: string) => dispatch({ type: 'SET_CHECK_IN', checkIn });
  const setCheckOut = (checkOut: string) => dispatch({ type: 'SET_CHECK_OUT', checkOut });
  const setDate = (date: Date) => dispatch({ type: 'SET_DATE', date });
  return { setCheckIn, setCheckOut, setDate };
}
