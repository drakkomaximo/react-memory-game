import { FC, useContext } from "react";

import { UiContext } from "../../context/ui";
import { DisorderAnimalsType } from "../../interfaces";

type FlipCardProps = {
  animal: DisorderAnimalsType;
};

export const FlipCard: FC<FlipCardProps> = ({ animal }) => {
  const { flipped, url, name, id, imageId } = animal;
  const { selectCard, cardsSelected, updateAnimalsImages } =
    useContext(UiContext);
  const cardClicked = () => {
    if (!flipped && cardsSelected.length < 2) {
      selectCard({ imageId, id });
      updateAnimalsImages({ id });
    }
  };
  return (
    <div className="group h-60 w-40 [perspective:1000px]" onClick={cardClicked}>
      <div
        className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <div className="absolute inset-0">
          <img
            className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
            src="https://guao.org/sites/default/files/biblioteca/La%20incognita.jpg"
            alt=""
          />
        </div>
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <img
            className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
            src={url}
            alt={name}
          />
        </div>
      </div>
    </div>
  );
};
