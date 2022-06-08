import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';

type Counter = {
  [key: string]: number;
  adult: number;
  child: number;
  toddler: number;
};
type State = {
  [key: string]: Counter | string;
  counter: Counter;
  personnelCounterText: string;
};

type Action =
  | { type: 'INCREASE_COUNT'; age: string }
  | { type: 'DECREASE_COUNT'; age: string }
  | { type: 'SET_COUNTER_TEXT'; text: string }
  | { type: 'RESET_COUNT'; payload: null };

type PersonnelDispatch = Dispatch<Action>;

const initState: State = {
  counter: { adult: 0, child: 0, toddler: 0 },
  personnelCounterText: '인원 선택',
};

const PersonnelStateContext = createContext<State | null>(initState);
const PersonnelDispatchContext = createContext<PersonnelDispatch | null>(null);

export function PersonnalProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(personnalReducer, initState);

  return (
    <PersonnelStateContext.Provider value={state}>
      <PersonnelDispatchContext.Provider value={dispatch}>
        {children}
      </PersonnelDispatchContext.Provider>
    </PersonnelStateContext.Provider>
  );
}

function personnalReducer(state: State, action: Action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      if (action.age !== 'adult' && state.counter.adult === 0) {
        return {
          ...state,
          counter: {
            ...state.counter,
            adult: state.counter.adult + 1,
            [action.age]: state.counter[action.age] + 1,
          },
        };
      }

      return {
        ...state,
        counter: { ...state.counter, [action.age]: state.counter[action.age] + 1 },
      };
    case 'DECREASE_COUNT':
      if (action.age === 'adult' && state.counter.adult - 1 === 0) {
        return {
          ...state,
          counter: { ...state.counter, adult: 0, child: 0, toddler: 0 },
        };
      }

      return {
        ...state,
        counter: { ...state.counter, [action.age]: state.counter[action.age] - 1 },
      };
    case 'SET_COUNTER_TEXT':
      return { ...state, personnelCounterText: action.text };
    case 'RESET_COUNT':
      return { ...initState };
    default:
      throw new Error();
  }
}

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
