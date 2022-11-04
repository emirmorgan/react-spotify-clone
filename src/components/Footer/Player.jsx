import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "../../img/Icons";
import { openSidebarImage } from "../../redux/playerSlice";
import PlayerSlider from "./PlayerSlider";

const Player = () => {
  const dispatch = useDispatch();

  const [volume, setVolume] = useState(0.3);
  const [time, setTime] = useState(0);

  const currentSong = useSelector((state) => state.player.currentSong);
  const sidebarImage = useSelector((state) => state.player.sidebarImage);

  return (
    <>
      <div
        className={
          currentSong.id === 0
            ? "invisible w-[30%]"
            : "flex items-center w-[30%] overflow-hidden"
        }
      >
        <div className="relative group">
          <div
            className="opacity-0 absolute right-0 rounded-full bg-black bg-opacity-60 p-1 mt-1 mr-1 hover:scale-110 hover:bg-opacity-80 group-hover:opacity-100"
            onClick={() => dispatch(openSidebarImage())}
          >
            <Icon name="upArrow" size="16" />
          </div>
          <div className={sidebarImage ? "hidden" : "w-14 h-14"}>
            <img src={currentSong.image} alt={currentSong.artist} />
          </div>
        </div>
        <div className="flex flex-col mx-[14px]">
          <a
            href="./"
            className="text-sm font-semibold hover:underline max-w-[150px] truncate"
          >
            {currentSong.title}
          </a>
          <a href="./" className="text-xs text-link hover:underline">
            {currentSong.artist}
          </a>
        </div>
        <button className=" text-link hover:text-white cursor-default">
          <Icon name="like" size="16" />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center w-[50%] md:w-[40%] gap-2 px-4">
        <div className="flex gap-6 mb-1">
          <button className="cursor-default text-link hover:text-white">
            <Icon name="shuffle" size="16" />
          </button>
          <button className="cursor-default text-link hover:text-white">
            <Icon name="leftPlay" size="16" />
          </button>
          <button className="cursor-default bg-white p-2 rounded-full text-black hover:scale-110">
            <Icon name="play" size="16" />
          </button>
          <button className="cursor-default text-link hover:text-white">
            <Icon name="rightPlay" size="16" />
          </button>
          <button className="cursor-default text-link hover:text-white">
            <Icon name="repeat" size="16" />
          </button>
        </div>
        <div className="flex items-center w-full h-3 group gap-2">
          <span className="text-xs text-link font-thin">0:00</span>
          <div className="flex items-center w-full">
            <PlayerSlider
              step={0.01}
              min={0}
              max={1}
              value={time}
              onChange={(time) => setTime(time)}
            />
          </div>
          <span className="text-xs text-link font-thin">0:00</span>
        </div>
      </div>
      <div className="flex items-center justify-end w-[20%] md:w-[30%] gap-2">
        <div className="flex items-center">
          <button className="hidden md:block text-link hover:text-white p-2">
            <Icon name="lyrics" size="16" />
          </button>
          <button className="hidden md:block text-link hover:text-white p-2">
            <Icon name="queue" size="16" />
          </button>
          <button className="hidden md:block text-link hover:text-white p-2">
            <Icon name="device" size="16" />
          </button>
        </div>
        <div className="flex items-center gap-3 mr-1">
          <button className="text-link hover:text-white">
            <Icon name="volume" size="16" />
          </button>
          <div className="flex items-center w-16 md:w-24">
            <PlayerSlider
              step={0.01}
              min={0}
              max={1}
              value={volume}
              onChange={(volume) => setVolume(volume)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
