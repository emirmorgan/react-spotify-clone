import Player from "./Footer/Player";

const Footer = () => {
  return (
    <footer className="flex bg-footer border-t border-white border-opacity-10">
      <div className="flex justify-between items-center w-full px-4 h-[5.625rem]">
        <Player />
      </div>
    </footer>
  );
};

export default Footer;
