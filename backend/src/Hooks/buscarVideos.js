import ytsApi from "youtube-search-api";

  const buscarVideos = async (query, cantidad) => {
    console.log("Esperando resultados...");
    const result = await ytsApi.GetListByKeyword(query, false, cantidad, [
      { type: "video" },
    ]);
    return result.items
  };

export default buscarVideos;