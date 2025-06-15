# Prueba Técnica: API de YouTube

## 1. Descripción del desafío
Construir una API en Express que permita:  
- Buscar videos o playlists de YouTube por nombre o URL.  
- Listar los resultados en JSON.  
- Obtener todos los videos de una playlist.  
- Descargar contenido en MP4 (video) o MP3 (audio 320 kbps).  
- Mantener un estándar de código limpio, documentación básica y manejo de errores.

---

## 2. Dependencias principales
- **Express**  
- **youtube-search-api** / **yt-search**  
- **ytdl-core**  
- **fluent-ffmpeg**  
- **express-rate-limit**

---

## 3. Estructura recomendada
```
youtube-api-test/
├─ server.js
├─ routes/
│   ├─ search.js
│   ├─ playlist.js
│   └─ download.js
├─ utils/
│   ├─ isYoutubeURL.js
│   └─ errorHandler.js
└─ README.md
```

---

## 4. Endpoints

### GET /search?q={texto_o_url}
- Detecta si `q` es URL de YouTube o texto.
- Si es URL → `ytdl-core.getInfo()`
- Si es texto → `youtube-search-api` o `yt-search`
- Responde con array de resultados:
  ```json
  [
    { "type":"video", "id":"abc", "title":"Título X", "duration":"3:20" },
    { "type":"playlist", "id":"PL123", "title":"Mi Playlist", "videoCount":25 }
  ]
  ```

### GET /playlist?id={playlistId}
- Obtiene todos los videos de la playlist.
- Devuelve array con `{ id, title, duration }`.

### GET /download?url={url}&format=mp4|mp3
- Valida `url` con `isYoutubeURL`.
- `format=mp4` → `ytdl-core(url, { quality:'highestvideo' })`
- `format=mp3` → `ytdl-core(url, { filter:'audioonly' })` + `fluent-ffmpeg().audioBitrate(320)`
- Stream de descarga con headers `Content-Disposition`.

---

## 5. Buenas prácticas
- Validación y sanitización de inputs.
- Manejo de errores centralizado (middleware).
- Rate limiting con `express-rate-limit`.
- Configuración por variables de entorno.
- Uso de streams para no agotar memoria.

---

## 6. Documentación
Incluir en README:  
1. Resumen del proyecto.  
2. Instalación (`npm install`, `npm start`).  
3. Descripción de endpoints con ejemplos `curl`.  
4. Errores comunes y soluciones.  
5. Posibles mejoras (Swagger, tests, caché).

---

## 7. Criterios de evaluación
- Funcionalidad completa de endpoints.  
- Código organizado y legible.  
- Manejo adecuado de errores y límites.  
- Documentación clara y concisa.  
- Flexibilidad sin exigencias excesivas (tests opcionales).  
