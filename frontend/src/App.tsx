import "./global.css";
import { Header } from "./components/Main";
import NavSearchVideo from "./components/NavSeachVideos"
// import { ListOfSongsProvider } from "./context/listOfSongs";

function App() {
  return (
    <>
      {/* <ListOfSongsProvider> */}
        <Header />
        <NavSearchVideo/>
      {/* </ListOfSongsProvider> */}
    </>
  );
}

export default App;
