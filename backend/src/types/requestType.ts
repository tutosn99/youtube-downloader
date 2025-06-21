import { z } from "zod";
import { dataSchema } from "./dataType";

export const requestSchema = z.object({
  type: z.enum(["video", "playlist"]),
  data: dataSchema,
});

export type requestType = z.infer<typeof requestSchema>;
