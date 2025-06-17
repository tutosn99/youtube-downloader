import "./global.css";
import { MainSearch } from "./components/Main";
import { ResultList } from "./components/ResultList";
import { ListOfSongsProvider } from "./context/listOfSongs";

function App() {
  return (
    <>
      <header className="bg-primary pb-8 pt-4 px-2 text-black text-4xl">
        <h1 className="text-center">Convertidor de Youtube a MP3/MP4</h1>
      </header>
      <ListOfSongsProvider>
        <MainSearch />
        <ResultList />
      </ListOfSongsProvider>
    </>
  );
}

export default App;
