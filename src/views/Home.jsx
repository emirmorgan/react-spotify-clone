import Songs from "../data/songs";
import Icon from "../img/Icons";

const Home = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-bold text-2xl">Recently played</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {Songs.map((song) => (
          <div className="flex flex-col group rounded-md cursor-pointer p-4 bg-footer hover:bg-menu">
            <div className="flex flex-col relative mb-4">
              <img
                src={song.image}
                alt={song.title}
                className={song.type === "artist" ? "rounded-full" : "rounded"}
                style={{ boxShadow: "0 8px 24px rgb(0 0 0 / 50%)" }}
              />
              <div className="flex items-center justify-center opacity-0 absolute bottom-3 right-3 w-12 h-12 rounded-full text-black bg-green-400 hover:scale-105 group-hover:opacity-100 transition-all ease-linear duration-200">
                <div className="mx-auto my-auto">
                  <Icon name="play" size={18} />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span numberOf className="font-bold pb-1 truncate ...">
                {song.title}
              </span>
              <span className="text-link text-sm truncate ...">
                {song.artist}
              </span>
            </div>
          </div>
        ))}
      </div>
      <h2 className="font-bold text-2xl">New releases for you</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {Songs.map((song) => (
          <div className="flex flex-col group rounded-md cursor-pointer p-4 bg-footer hover:bg-menu">
            <div className="flex flex-col relative mb-4">
              <img
                src={song.image}
                alt={song.title}
                className={song.type === "artist" ? "rounded-full" : "rounded"}
                style={{ boxShadow: "0 8px 24px rgb(0 0 0 / 50%)" }}
              />
              <div className="flex items-center justify-center opacity-0 absolute bottom-3 right-3 w-12 h-12 rounded-full text-black bg-green-400 hover:scale-105 group-hover:opacity-100 transition-all ease-linear duration-200">
                <div className="mx-auto my-auto">
                  <Icon name="play" size={18} />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span numberOf className="font-bold pb-1 truncate ...">
                {song.title}
              </span>
              <span className="text-link text-sm truncate ...">
                {song.artist}
              </span>
            </div>
          </div>
        ))}
      </div>
      <h2 className="font-bold text-2xl">Recommended for today</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {Songs.map((song) => (
          <div className="flex flex-col group rounded-md cursor-pointer p-4 bg-footer hover:bg-menu">
            <div className="flex flex-col relative mb-4">
              <img
                src={song.image}
                alt={song.title}
                className={song.type === "artist" ? "rounded-full" : "rounded"}
                style={{ boxShadow: "0 8px 24px rgb(0 0 0 / 50%)" }}
              />
              <div className="flex items-center justify-center opacity-0 absolute bottom-3 right-3 w-12 h-12 rounded-full text-black bg-green-400 hover:scale-105 group-hover:opacity-100 transition-all ease-linear duration-200">
                <div className="mx-auto my-auto">
                  <Icon name="play" size={18} />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span numberOf className="font-bold pb-1 truncate ...">
                {song.title}
              </span>
              <span className="text-link text-sm truncate ...">
                {song.artist}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
