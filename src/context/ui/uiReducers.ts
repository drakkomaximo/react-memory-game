import { UiState } from ".";
import { CardSelectedType, DisorderAnimalsType } from "../../interfaces";

type UserActionType =
  | {
      type: "[UI] Selected Card";
      payload: CardSelectedType;
    }
  | {
      type: "[UI] Old Selected Card";
      payload: CardSelectedType[];
    }
  | {
      type: "[UI] Old Show Modal";
      payload: boolean;
    }
  | { type: "[UI] Update Card Selected"; payload: string }
  | { type: "[UI] Set Animals Images"; payload: DisorderAnimalsType[] }
  | { type: "[UI] Clear Cards Selected" }
  | { type: "[UI] Toogle Success Modal" };

export const uiReducers = (state: UiState, action: UserActionType): UiState => {
  switch (action.type) {
    case "[UI] Old Selected Card":
      return {
        ...state,
        cardsSelected: action.payload,
      };
    case "[UI] Selected Card":
      return {
        ...state,
        cardsSelected: [...state.cardsSelected, action.payload],
      };
    case "[UI] Clear Cards Selected":
      return {
        ...state,
        cardsSelected: [],
      };
    case "[UI] Set Animals Images":
      return {
        ...state,
        images: action.payload,
      };
    case "[UI] Toogle Success Modal":
      return {
        ...state,
        showModal: !state.showModal,
      };
    case "[UI] Old Show Modal":
      return {
        ...state,
        showModal: action.payload,
      };
    case "[UI] Update Card Selected":
      return {
        ...state,
        images: state.images.map((image) => {
          if (image.id === action.payload) {
            return {
              ...image,
              flipped: !image.flipped,
            };
          } else {
            return { ...image };
          }
        }),
      };

    default:
      return state;
  }
};
