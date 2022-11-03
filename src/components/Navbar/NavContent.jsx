import { useLocation } from "react-router-dom";
import Icon from "../../img/Icons";

const NavContent = () => {
  let location = useLocation();

  return (
    <div className="flex flex-1">
      {location.pathname === "/search" ? (
        <div className="flex items-center h-10 rounded-full bg-white">
          <div className="ml-3">
            <Icon name="magnifying" size="28" />
          </div>
          <div>
            <input
              type="text"
              className="rounded-full font-normal text-black placeholder-gray-500 text-sm w-[100%] md:w-[320px] px-2 focus:outline-none"
              placeholder="What do you want to listen to?"
            />
          </div>
        </div>
      ) : location.pathname === "/library" ? (
        <nav>
          <ul className="flex gap-2">
            <li>
              <a
                href="./"
                className="text-xs md:text-sm font-bold rounded px-2 md:px-4 py-2 bg-white bg-opacity-10"
              >
                <span>Playlists</span>
              </a>
            </li>
            <li className="hidden md:block">
              <a
                href="./"
                className="text-xs md:text-sm font-bold rounded px-2 md:px-4 py-2"
              >
                <span>Podcasts</span>
              </a>
            </li>
            <li>
              <a
                href="./"
                className="text-xs md:text-sm font-bold rounded px-2 md:px-4 py-2"
              >
                <span>Artists</span>
              </a>
            </li>
            <li>
              <a
                href="./"
                className="text-xs md:text-sm font-bold rounded px-2 md:px-4 py-2"
              >
                <span>Albums</span>
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
};

export default NavContent;
