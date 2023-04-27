import { AxiosInstance } from "../../../../config";
import { ModyoType } from "../interfaces/outputs/modyo";

export const getAnimalsImagesApi = async () => {
  const res = await AxiosInstance.get<ModyoType>(
    "/api/content/spaces/animals/types/game/entries?per_page=20"
  );
  return res.data;
};
