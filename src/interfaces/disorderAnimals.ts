import { z } from "zod";

export type DisorderAnimalsType = z.infer<typeof DisorderAnimalsSchema>;

export const DisorderAnimalsSchema = z.object({
  id: z.string(),
  flipped: z.boolean(),
  imageId: z.string(),
  name: z.string(),
  url: z.string(),
});
