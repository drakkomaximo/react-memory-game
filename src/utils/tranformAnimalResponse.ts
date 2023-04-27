import { DisorderAnimalsType } from "../interfaces/disorderAnimals";
import { ModyoType } from "../services/http/images/interfaces/outputs/modyo";

export const tranformAnimalResponse = ({
  data,
  size = 14,
}: {
  data: ModyoType;
  size?: number;
}): DisorderAnimalsType[] => {
  const formatData = data.entries.slice(0, size).map((entry) => ({
    imageId: entry.fields.image.uuid,
    name: entry.fields.image.title,
    url: entry.fields.image.url,
  }));
  const gameAnimalsArray = [...formatData, ...formatData];
  const disorderAnimals = gameAnimalsArray.map((animals) => ({
    ...animals,
    id: `${Math.random() * 1000}`,
    flipped: false,
  }));
  return disorderAnimals.sort(function (a, b) {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
};
