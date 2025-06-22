import { z } from "zod";
import { AxiosResponse } from "axios";

// Esquema para URL válida
export const UrlSchema = z.string().url();
export type Url = z.infer<typeof UrlSchema>;

// Esquema para ID válido (puedes ajustar la validación según tus necesidades)
export const IdSchema = z.string();
export type Id = z.infer<typeof IdSchema>;

// Esquema para la respuesta de videos de YouTube
export const VideoListResponseSchema = z.object({
  items: z.array(z.unknown()), // Puedes definir el esquema de los items si lo necesitas
});
export type VideoListResponse = z.infer<typeof VideoListResponseSchema>;

// Validadores usando Zod
export function isValidUrl(url: unknown): url is Url {
  return UrlSchema.safeParse(url).success;
}

export function isValidId(id: unknown): id is Id {
  return IdSchema.safeParse(id).success;
}

export function thereAreResults(respuesta: unknown): boolean {
  if (typeof respuesta === "undefined" || respuesta === null) {
    return false;
  }

  const data = (typeof respuesta === "object" && respuesta !== null && "data" in respuesta)
    ? (respuesta as AxiosResponse).data
    : respuesta;

  const parsed = VideoListResponseSchema.safeParse(data);
  return parsed.success && Array.isArray(parsed.data.items) && parsed.data.items.length >= 1;
}

export function errorResponse(message: string, type = "ERROR_TYPE") {
  return { error: { message, type } };
}
