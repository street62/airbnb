import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';

type Counter = {
  [key: string]: number;
  adult: number;
  child: number;
  toddler: number;
};

type State = {
  counter: Counter;
  personnelCounterText: string;
};

type Action = { type: 'INCREASE_COUNT'; age: string } | { type: 'DECREASE_COUNT'; age: string };

type PersonnelDispatch = Dispatch<Action>;

const PersonnelStateContext = createContext<State | null>(null);
const PersonnelDispatchContext = createContext<PersonnelDispatch | null>(null);

const initState: State = {
  counter: { adult: 0, child: 0, toddler: 0 },
  personnelCounterText: '인원 선택',
};

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
      return state;
    case 'DECREASE_COUNT':
      return state;
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

  return dispatch;
}
