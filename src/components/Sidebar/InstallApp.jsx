import React from "react";
import Icon from "../../img/Icons";

const InstallApp = () => {
  return (
    <div className="px-2">
      <div className="flex items-center cursor-pointer hover:text-white h-10 px-4 gap-4 transition ease-linear duration-200">
        <Icon name="install" />
        <span className="text-sm font-semibold">Install App</span>
      </div>
    </div>
  );
};

export default InstallApp;
