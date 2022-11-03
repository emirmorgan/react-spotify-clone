import Categories from "../data/categories";

const Search = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-bold text-2xl">Browse all</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
        {Categories.map((category) => (
          <div
            className="flex flex-col relative rounded-md cursor-pointer max-w-[250px] after:pt-[60%] overflow-hidden"
            style={{ backgroundColor: category.color }}
          >
            <img
              src={category.image}
              alt={category.title}
              className="absolute w-[6.25rem] h-[6.25rem] rotate-[25deg] translate-x-[18%] translate-y-[2%] bottom-0 right-0"
              style={{ boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)" }}
            />
            <span className="font-bold text-2xl p-4">{category.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
