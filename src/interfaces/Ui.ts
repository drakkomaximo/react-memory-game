import { z } from "zod";

export const ImageType = "images";
export const CardsSelectedType = "cardSelected";
export const ShowModalType = "showModal";

export type CardSelectedType = z.infer<typeof CardSelectedSchema>;

export const CardSelectedSchema = z.object({
  id: z.string(),
  imageId: z.string(),
});
