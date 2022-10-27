import home from "../../img/home.svg";
import search from "../../img/search.svg";
import library from "../../img/library.svg";

const Menu = () => {
  return (
    <nav>
      <ul className="flex flex-col">
        <li className="cursor-pointer px-2 hover:text-white transition ease-linear duration-200">
          <a
            href="./"
            className="flex items-center h-10 gap-4 text-sm font-bold px-4"
          >
            <img src={home} alt="Home Icon" />
            <span>Home</span>
          </a>
        </li>
        <li className="cursor-pointer px-2 hover:text-white transition ease-linear duration-200">
          <a
            href="./"
            className="flex items-center h-10 gap-4 text-sm font-bold px-4"
          >
            <img src={search} alt="Search Icon" />
            <span>Search</span>
          </a>
        </li>
        <li className="cursor-pointer px-2 hover:text-white transition ease-linear duration-200">
          <a
            href="./"
            className="flex items-center h-10 gap-4 text-sm font-bold px-4"
          >
            <img src={library} alt="Library Icon" />
            <span>Your Library</span>
          </a>
        </li>
      </ul>
      <div className="mt-6"></div>
    </nav>
  );
};

export default Menu;
