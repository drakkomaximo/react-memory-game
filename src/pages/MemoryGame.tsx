import { FC, useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user";
import { useImages } from "../hooks";
import {
  findFalseValues,
  tranformAnimalResponse,
} from "../utils";
import { FlipCard } from "../components/ui";
import { UiContext } from "../context/ui";

export const MemoryGame: FC = () => {
  const size = 2;
  const [isFinished, setIsFinished] = useState(false);
  const {
    currentScore,
    globalScore,
    name,
    numberOfGames,
    logOut,
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
      <div className="flex w-full px-12 justify-between mt-10">
        <div className="flex justify-between w-full">
          <div className="flex ">
            <h1>Global Score: </h1>
            <div className="flex">
              Total of Mistakes{" "}
              <h1 className=" text-red-700">{globalScore.errors}</h1>
              Total of Checks
              <h1 className=" text-red-700">{globalScore.pairs}</h1>
              Number of games
              <h1 className=" text-red-700">{numberOfGames}</h1>
            </div>
          </div>
          <div className="flex ">
            <h1>Welcome: </h1>
            <div className="flex">
              <h1 className=" text-red-700">{name}</h1>
            </div>
          </div>
          <div className="flex ">
            <h1>Current Score: </h1>
            <div className="flex">
              Mistakes{" "}
              <h1 className=" text-red-700">
                {currentScore && currentScore.errors}
              </h1>
              Checks
              <h1 className=" text-red-700">
                {currentScore && currentScore.pairs}
              </h1>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="mt-1 text-lg font-semibold
            bg-gray-800 w-20 text-white rounded-lg block shadow-xl hover:text-white hover:bg-black"
          onClick={logOut}
        >
          Salir
        </button>
      </div>
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
