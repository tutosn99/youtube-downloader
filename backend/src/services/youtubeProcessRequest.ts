import { validateTypeVideo } from "../types/validateTypeVideo";
import { searchHandler } from "../helpers/searchHandler";
import type { requestType } from "../types/requestType";

export async function youtubeProcessRequest(search: requestType) {
  const validationSearch = validateTypeVideo(search);
  if (!validationSearch.ok) {
    return {
      error: { message: validationSearch.reason, type: "ERROR_TYPE_OF_SEARCH" },
    };
  }
  try {
    const resultado = await searchHandler(search);
    return resultado;
  } catch (error) {
    return { error: { message: error, type: "ERROR_IN_SEARCH" } };
  }
}
