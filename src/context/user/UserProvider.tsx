import { FC, useReducer, useEffect } from "react";
import { User, LoginType, Score } from "../../interfaces";
import { UserContext, userReducers } from ".";

export interface UserState {
  name: string | null;
  numberOfGames: number;
  currentScore: Score;
  globalScore: Score;
}

const USER_INITIAL_STATE: UserState = {
  name: null,
  numberOfGames: 0,
  currentScore: {
    errors: 0,
    pairs: 0,
  },
  globalScore: {
    errors: 0,
    pairs: 0,
  },
};

export const UserProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducers, USER_INITIAL_STATE);

  const logIn = ({ userName }: { userName: string }) => {
    const newUser: User = {
      name: userName,
      numberOfGames: 0,
      globalScore: {
        errors: 0,
        pairs: 0,
      },
      currentScore: {
        errors: 0,
        pairs: 0,
      },
    };
    dispatch({ type: "[User] Set User Profile", payload: newUser });
    localStorage.setItem(LoginType, JSON.stringify(newUser));
  };

  const logOut = () => {
    dispatch({ type: "[User] Set User Profile", payload: USER_INITIAL_STATE });
    localStorage.clear();
  };

  const searchLastSection = () => {
    const oldSection = localStorage.getItem(LoginType);
    if (oldSection) {
      dispatch({
        type: "[User] Set User Profile",
        payload: { ...JSON.parse(oldSection) },
      });
    }
  };

  const addCurrentMistake = () => {
    dispatch({
      type: "[User] Add Mistake On Current Score",
    });
  };

  const addCurrentCheck = () => {
    dispatch({
      type: "[User] Add Check On Current Score",
    });
  };

  const resetCurrentScore = () => {
    dispatch({
      type: "[User] Reset Current Score",
    });
  };

  const setGlobalScore = ({ errors, pairs }: Score) => {
    dispatch({
      type: "[User] Set Global Score",
      payload: {
        errors,
        pairs,
      },
    });
  };

  useEffect(() => {
    searchLastSection();
  }, []);

  useEffect(() => {
    state.name && localStorage.setItem(LoginType, JSON.stringify(state));
  }, [state]);

  return (
    <UserContext.Provider
      value={{
        ...state,
        logIn,
        logOut,
        addCurrentMistake,
        addCurrentCheck,
        resetCurrentScore,
        setGlobalScore,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
