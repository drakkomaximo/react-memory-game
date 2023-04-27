import { z } from 'zod';

export type ModyoType = z.infer<typeof Modyochema>;

export const MetaModyoSchema = z.object({
  current_page: z.number(),
  per_page: z.number(),
  total_entries: z.number(),
  total_pages: z.number(),
});
export const ImageSchema = z.object({
    alt_text: z.string().nullable(),
    content_type: z.string(),
    description: z.string().nullable(),
    title: z.string(),
    url: z.string(),
    uuid: z.string()
})

export const EntrySchema = z.object({
    fields: z.object({
      image:ImageSchema
    }),
})

export const EntriesSchema = z.array(EntrySchema);

export const Modyochema = z.object({
  entries: EntriesSchema,
  meta: MetaModyoSchema
});
