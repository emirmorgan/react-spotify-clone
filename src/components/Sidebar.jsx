import { useDispatch, useSelector } from "react-redux";
import { Logo } from "../img/Logo";
import { openSidebarImage } from "../redux/playerSlice";
import InstallApp from "./Sidebar/InstallApp";

import Menu from "./Sidebar/Menu";
import Playlist from "./Sidebar/Playlist";

const Sidebar = () => {
  const dispatch = useDispatch();

  const currentSong = useSelector((state) => state.player.currentSong);
  const sidebarImage = useSelector((state) => state.player.sidebarImage);

  return (
    <aside className="flex flex-col bg-black text-link w-44 min-w-[11rem] md:w-52 md:min-w-[13rem] lg:w-60 lg:min-w-[15rem] pt-6">
      <div className="px-6 mb-6">
        <a href="./">
          <Logo />
        </a>
      </div>
      <Menu />
      <hr className="mt-2 mx-6 opacity-20" />
      <Playlist />
      <InstallApp />
      <div className={sidebarImage ? "relative" : "hidden"}>
        <div className="pt-[100%] group">
          <img
            src={currentSong.image}
            alt={currentSong.title}
            className="w-full h-full object-cover absolute top-0 left-0"
          />
          <button
            class="absolute flex items-center justify-center w-6 h-6 bg-black text-white rounded-full opacity-0 group-hover:opacity-60 hover:!opacity-100 hover:scale-110 top-2 right-2"
            onClick={() => dispatch(openSidebarImage())}
          >
            <svg role="img" height="16" width="16" viewBox="0 0 16 16">
              <path
                fill="currentColor"
                d="M.47 4.97a.75.75 0 011.06 0L8 11.44l6.47-6.47a.75.75 0 111.06 1.06L8 13.56.47 6.03a.75.75 0 010-1.06z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
