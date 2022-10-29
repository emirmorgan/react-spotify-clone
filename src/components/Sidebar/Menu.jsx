import { NavLink } from "react-router-dom";
import Icon from "../../img/Icons";

let defaultClassName =
  "flex items-center h-10 gap-4 text-sm font-bold px-4 hover:text-white transition ease-linear duration-200";
let activeClassName =
  "flex items-center h-10 gap-4 text-sm font-bold px-4 text-white transition ease-linear duration-200";

const Menu = () => {
  return (
    <nav>
      <ul className="flex flex-col">
        <li className="cursor px-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClassName : defaultClassName
            }
            end
          >
            {({ isActive }) => (
              <>
                <Icon name={isActive ? "homeActive" : "home"} />
                <span>Home</span>
              </>
            )}
          </NavLink>
        </li>
        <li className="cursor-pointer px-2 hover:text-white transition ease-linear duration-200">
          <NavLink
            to="search"
            className={({ isActive }) =>
              isActive ? activeClassName : defaultClassName
            }
          >
            {({ isActive }) => (
              <>
                <Icon name={isActive ? "searchActive" : "search"} />
                <span>Search</span>
              </>
            )}
          </NavLink>
        </li>
        <li className="cursor-pointer px-2 hover:text-white transition ease-linear duration-200">
          <NavLink
            to="library"
            className={({ isActive }) =>
              isActive ? activeClassName : defaultClassName
            }
          >
            {({ isActive }) => (
              <>
                <Icon name={isActive ? "libraryActive" : "library"} />
                <span>Your Library</span>
              </>
            )}
          </NavLink>
        </li>
      </ul>
      <div className="mt-6">
        <div className="cursor-pointer px-2 hover:text-white transition ease-linear duration-200">
          <NavLink
            href="./"
            className="flex items-center group h-10 gap-4 text-sm font-bold px-4"
          >
            <div className="w-6 h-6 flex justify-center place-items-center bg-white rounded-sm bg-opacity-70 group-hover:bg-opacity-100 transition ease-linear duration-200 ">
              <Icon name="plus" size="12" />
            </div>
            <span>Create Playlist</span>
          </NavLink>
        </div>
        <div className="cursor-pointer px-2 hover:text-white transition ease-linear duration-200">
          <NavLink
            href="./"
            className="flex items-center group h-10 gap-4 text-sm font-bold px-4"
          >
            <div className="w-6 h-6 flex justify-center place-items-center rounded-sm opacity-70 group-hover:opacity-100 bg-gradient-to-br from-violet-800 to-blue-300 transition ease-linear duration-200">
              <Icon name="heart" size="12" />
            </div>
            <span>Liked Songs</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
