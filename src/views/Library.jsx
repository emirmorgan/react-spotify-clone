import Playlist from "../data/playlist";
import Icon from "../img/Icons";

const Library = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <div
          className="flex flex-col p-5 relative group rounded-md justify-end cursor-pointer col-span-1 md:col-span-2"
          style={{
            background:
              "linear-gradient(149.46deg, rgb(69, 10, 245), rgb(142, 142, 229) 99.16%)",
          }}
        >
          <span className="font-bold text-3xl pb-4">Liked songs</span>
          <span className="font-semibold text-base">9 Likes</span>
          <div
            className="flex items-center justify-center opacity-0 absolute bottom-3 right-3 w-12 h-12 rounded-full text-black bg-green-400 hover:scale-105 group-hover:opacity-100 transition-all ease-linear duration-200"
            style={{ boxShadow: "0 8px 8px rgb(0 0 0 / 30%)" }}
          >
            <div className="mx-auto my-auto">
              <Icon name="play" size={18} />
            </div>
          </div>
        </div>
        {Playlist.map((list) => (
          <div className="flex flex-col group rounded-md cursor-pointer p-4 bg-footer hover:bg-menu">
            <div className="flex flex-col relative mb-4">
              <img
                src={list.image}
                alt={list.title}
                className="rounded"
                style={{ boxShadow: "0 8px 24px rgb(0 0 0 / 50%)" }}
              />
              <div
                className="flex items-center justify-center opacity-0 absolute bottom-3 right-3 w-12 h-12 rounded-full text-black bg-green-400 hover:scale-105 group-hover:opacity-100 transition-all ease-linear duration-200"
                style={{ boxShadow: "0 8px 8px rgb(0 0 0 / 30%)" }}
              >
                <div className="mx-auto my-auto">
                  <Icon name="play" size={18} />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span numberOf className="font-bold pb-1 truncate ...">
                {list.title}
              </span>
              <span className="text-link text-sm truncate ...">
                {"By " + list.creator}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
