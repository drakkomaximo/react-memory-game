import { FC, useReducer, useEffect } from "react";
import { UiContext, uiReducers } from ".";
import {
  CardSelectedType,
  CardsSelectedType,
  DisorderAnimalsType,
  ImageType,
} from "../../interfaces";

export interface UiState {
  cardsSelected: {
    id: string;
    imageId: string;
  }[];
  images: DisorderAnimalsType[];
}

const UI_INITIAL_STATE: UiState = {
  cardsSelected: [],
  images: [],
};

export const UiProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducers, UI_INITIAL_STATE);

  const selectCard = ({ imageId, id }: CardSelectedType) => {
    dispatch({ type: "[UI] Selected Card", payload: { imageId, id } });
  };

  const updateAnimalsImages = ({ id }: { id: string }) => {
    dispatch({ type: "[UI] Update Card Selected", payload: id });
  };

  const clearCardsSelected = () => {
    dispatch({ type: "[UI] Clear Cards Selected" });
    localStorage.removeItem(CardsSelectedType);
  };

  const getAnimalsImages = ({ images }: { images: DisorderAnimalsType[] }) => {
    dispatch({ type: "[UI] Set Animals Images", payload: images });
  };

  const searchLastImagesSection = () => {
    const oldImageSection = localStorage.getItem(ImageType);
    if (oldImageSection) {
      dispatch({
        type: "[UI] Set Animals Images",
        payload: JSON.parse(oldImageSection),
      });
    }
  };
  const searchLastCardsSelectedSection = () => {
    const oldCarsSelectedSection = localStorage.getItem(CardsSelectedType);
    if (oldCarsSelectedSection) {
      dispatch({
        type: "[UI] Old Selected Card",
        payload: JSON.parse(oldCarsSelectedSection),
      });
    }
  };

  useEffect(() => {
    searchLastImagesSection();
  }, []);

  useEffect(() => {
    searchLastCardsSelectedSection();
  }, []);

  useEffect(() => {
    const saveImagesToLocalStorage = () => {
      localStorage.setItem(ImageType, JSON.stringify(state.images));
      state.cardsSelected.length > 0 &&
        localStorage.setItem(
          CardsSelectedType,
          JSON.stringify(state.cardsSelected)
        );
    };
    state.images.length > 0 && saveImagesToLocalStorage();
  }, [state]);

  return (
    <UiContext.Provider
      value={{
        ...state,
        updateAnimalsImages,
        getAnimalsImages,
        selectCard,
        clearCardsSelected,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
