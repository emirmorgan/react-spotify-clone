import NavControl from "./Navbar/NavControl";
import NavContent from "./Navbar/NavContent";
import NavUser from "./Navbar/NavUser";

const Navbar = () => {
  return (
    <div className="flex justify-between h-16 px-8 py-4 gap-4 items-center">
      <NavControl />
      <NavContent />
      <NavUser />
    </div>
  );
};

export default Navbar;
