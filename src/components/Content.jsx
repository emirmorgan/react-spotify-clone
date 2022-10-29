import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

import Home from "../views/Home";
import Search from "../views/Search";
import Library from "../views/Library";

const Content = () => {
  return (
    <div className="w-full h-full">
      <div
        className="flex flex-col"
        style={{ minHeight: "calc((100vh - 64px) - 90px)" }}
      >
        <Navbar />
        <main className="flex flex-col px-8 pt-4">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="library" element={<Library />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Content;
