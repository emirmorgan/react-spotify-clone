import { Logo } from "../img/Logo";
import InstallApp from "./Sidebar/InstallApp";

import Menu from "./Sidebar/Menu";
import Playlist from "./Sidebar/Playlist";

const Sidebar = () => {
  return (
    <aside className="flex flex-col bg-black text-link w-72 pt-6">
      <div className="px-6 mb-6">
        <a href="./">
          <Logo />
        </a>
      </div>
      <Menu />
      <hr className="mt-2 mx-6 opacity-20" />
      <Playlist />
      <InstallApp />
    </aside>
  );
};

export default Sidebar;
