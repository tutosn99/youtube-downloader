import { requestSchema } from "../types/requestType";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function validateTypeVideo(search: any): {
  ok: boolean;
  reason?: string;
} {
  let validation: { ok: boolean; reason?: string } = { ok: false };
  const result = requestSchema.safeParse(search);

  if (result.success) {
    validation = { ok: true };
  } else {
    validation = { ok: false, reason: result.error.errors[0].message };
  }
  
  if (search.type === "playlist" && "title" in search.data) {
    validation = { ok: false, reason: "Playlist necesita URL" };
  }
  return validation;
}
