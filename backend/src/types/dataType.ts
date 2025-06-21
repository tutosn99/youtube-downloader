import {z} from 'zod'

export const dataSchema = z
  .object({
    url: z.string().url().optional(),
    title: z.string().optional(),
  })
  .strict()
  .refine(
    (d) => {
      const keys = Object.keys(d);
      return (
        keys.length === 1 && (keys.includes("url") || keys.includes("title"))
      );
    },
    {
      message: "Error en el tipo de video",
      path: ["url"],
    }
  );

export type dataType = z.infer<typeof dataSchema>;
  