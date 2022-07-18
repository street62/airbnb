import { useContext } from 'react';
import { PeriodDispatchContext, PeriodStateContext } from 'contexts/periodContext';

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
