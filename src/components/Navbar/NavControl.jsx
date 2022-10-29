import { useNavigate } from "react-router-dom";
import Icon from "../../img/Icons";

const NavControl = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-4">
      <button
        className="w-8 h-8 flex justify-center items-center rounded-full bg-black"
        onClick={() => navigate(-1)}
      >
        <Icon name="leftArrow" size="22" />
      </button>
      <button
        className="w-8 h-8 flex justify-center items-center rounded-full bg-black"
        onClick={() => navigate(+1)}
      >
        <Icon name="rightArrow" size="22" />
      </button>
    </div>
  );
};

export default NavControl;
