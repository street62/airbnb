import { useContext } from 'react';

import { PersonnelDispatchContext, PersonnelStateContext } from 'contexts/PersonnelContext';

export function usePersonnelState() {
  const state = useContext(PersonnelStateContext);
  if (!state) throw new Error();

  return { counter: state.counter, personnelCounterText: state.personnelCounterText };
}

export function usePersonnelDispatch() {
  const dispatch = useContext(PersonnelDispatchContext);
  if (!dispatch) throw new Error();

  const increaseCount = (age: string) => dispatch({ type: 'INCREASE_COUNT', age });
  const decreaseCount = (age: string) => dispatch({ type: 'DECREASE_COUNT', age });
  const setPersonnelText = (text: string) => dispatch({ type: 'SET_COUNTER_TEXT', text });
  const resetCount = () => dispatch({ type: 'RESET_COUNT', payload: null });

  return { increaseCount, decreaseCount, setPersonnelText, resetCount };
}
