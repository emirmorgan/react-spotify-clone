import logo from "../img/logo.svg";
import Menu from "./Sidebar/Menu";

const Sidebar = () => {
  return (
    <aside className="bg-black text-link w-60 pt-6">
      <div className="px-6 mb-6">
        <a href="./">
          <img
            src={logo}
            alt="Spotify Logo"
            style={{ width: "100%", maxWidth: "131px", height: "40px" }}
          />
        </a>
      </div>
      <Menu />
    </aside>
  );
};

export default Sidebar;
