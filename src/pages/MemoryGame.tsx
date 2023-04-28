import { FC, useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user";
import { useImages } from "../hooks";
import {
  findFalseValues,
  tranformAnimalResponse,
} from "../utils";
import { FlipCard, SuccessModal } from "../components/ui";
import { UiContext } from "../context/ui";

export const MemoryGame: FC = () => {
  const size = 7;
  const [isFinished, setIsFinished] = useState(false);
  const {
    currentScore,
    addCurrentMistake,
    addCurrentCheck,
    resetCurrentScore,
    setGlobalScore,
  } = useContext(UserContext);
  const {
    images,
    cardsSelected,
    clearCardsSelected,
    updateAnimalsImages,
    getAnimalsImages,
    toggleModal
  } = useContext(UiContext);
  const { data } = useImages();

  useEffect(() => {
    if (data && images.length === 0) {
      getAnimalsImages({ images: tranformAnimalResponse({ data, size }) });
    }
  }, [data, images, getAnimalsImages]);

  useEffect(() => {
    if (cardsSelected.length === 2) {
      if (
        cardsSelected[0].imageId &&
        cardsSelected[1].imageId &&
        cardsSelected[0].imageId === cardsSelected[1].imageId
      ) {
        addCurrentCheck();
      } else {
        setTimeout(() => {
          addCurrentMistake();
          cardsSelected.forEach((card) => {
            updateAnimalsImages({ id: card.id });
          });
        }, 1000);
      }
      clearCardsSelected();
    }
  }, [cardsSelected]);

  useEffect(() => {
    const resetGame = /* async */ () => {
      if (findFalseValues({ images })) {
        if (isFinished) {
          if(data){
            setTimeout(() => {
              toggleModal()
              setGlobalScore({ ...currentScore });
              resetCurrentScore();
              getAnimalsImages({ images: tranformAnimalResponse({ data, size }) })
            }, 1000);
          }
          setIsFinished(false);
        }
      } else {
        setIsFinished(true);
      }
    };
    resetGame();
  }, [images, isFinished, currentScore]);
  return (
    <section className=" flex flex-wrap justify-center">
      <SuccessModal />
      <div className=" flex flex-wrap justify-center">
        {images.map((animal) => (
          <div className="m-3" key={animal.id}>
            <FlipCard animal={animal} />
          </div>
        ))}
      </div>
    </section>
  );
};
