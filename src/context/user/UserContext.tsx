import { createContext } from "react";
import { Score } from "../../interfaces";

interface ContextProps {
  name: string | null;
  numberOfGames: number;
  currentScore: Score;
  globalScore: Score;
  logIn: ({ userName }: { userName: string }) => void;
  logOut: () => void;
  setGlobalScore: ({ errors, pairs }: Score) => void;
  addCurrentMistake: () => void;
  addCurrentCheck: () => void;
  resetCurrentScore: () => void;
}

export const UserContext = createContext({} as ContextProps);
