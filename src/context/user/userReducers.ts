import { Score, User } from "../../interfaces";
import { UserState } from ".";

type UserActionType =
  | { type: "[User] Set User Profile"; payload: User }
  | { type: "[User] Set Global Score"; payload: Score }
  | { type: "[User] Add Mistake On Current Score" }
  | { type: "[User] Add Check On Current Score" }
  | { type: "[User] Reset Current Score" };

export const userReducers = (
  state: UserState,
  action: UserActionType
): UserState => {
  switch (action.type) {
    case "[User] Set User Profile":
      return {
        ...action.payload,
      };
    case "[User] Set Global Score":
      return {
        ...state,
        numberOfGames: state.numberOfGames + 1,
        globalScore: {
          errors: state.globalScore.errors + action.payload.errors,
          pairs: state.globalScore.pairs + action.payload.pairs - 1,
        },
      };
    case "[User] Add Mistake On Current Score":
      return {
        ...state,
        currentScore: {
          ...state.currentScore,
          errors: state.currentScore.errors++,
        },
      };
    case "[User] Add Check On Current Score":
      return {
        ...state,
        currentScore: {
          ...state.currentScore,
          pairs: state.currentScore.pairs++,
        },
      };
    case "[User] Reset Current Score":
      return {
        ...state,
        currentScore: {
          errors: 0,
          pairs: 0,
        },
      };

    default:
      return state;
  }
};
