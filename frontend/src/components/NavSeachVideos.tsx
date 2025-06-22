// search
import { Video, List } from "lucide-react"; 
import { useState } from "react";
import {buttonStyles} from'../styles/navSearchVideo'

function NavSeachVideo() {
  const [buttonActive, setButtonActive] = useState("video");

  return (
    <nav>
      <div className="typeSelector flex justify-center gap-7 py-6">
        <button
          className={`${buttonStyles.base} ${buttonActive === "video"? buttonStyles.videoStyle.active: buttonStyles.videoStyle.disactive}`}
          onClick={() => {setButtonActive("video");}}
          >
            <Video className="h-1/1" />   
            <p className="h-max text-2xl">Video</p>
        </button>
        <button
          className={`${buttonStyles.base} ${buttonActive === "playlist"? buttonStyles.playlistStyle.active: buttonStyles.playlistStyle.disactive}`}
          onClick={() => {setButtonActive("playlist");}}
          >
            <List className="h-1/1" />
            <p className="h-max text-2xl">PlayList</p>
        </button>
      </div>
    </nav>
  );
}

export default NavSeachVideo;
