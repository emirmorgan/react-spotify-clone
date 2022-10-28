import React from "react";

const Playlist = () => {
  return (
    <div className="py-2">
      <ul className="px-2">
        <li className="px-4">
          <a
            href="./"
            className="flex items-center h-8 text-sm hover:text-white"
          >
            <span>Playlist 1</span>
          </a>
        </li>
        <li className="px-4">
          <a
            href="./"
            className="flex items-center h-8 text-sm hover:text-white"
          >
            <span>Playlist 2</span>
          </a>
        </li>
        <li className="px-4">
          <a
            href="./"
            className="flex items-center h-8 text-sm hover:text-white"
          >
            <span>Playlist 3</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Playlist;
