import { DisorderAnimalsType } from "../interfaces";

export const findFalseValues = ({
  images,
}: {
  images: DisorderAnimalsType[];
}) => {
  const booleanValues = images.map((image) => image.flipped);
  return !booleanValues.includes(false);
};
