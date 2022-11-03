import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Icon from "../../img/Icons";

const NavUser = () => {
  return (
    <Menu as="nav" className={"relative"}>
      <Menu.Button>
        <div className="flex items-center rounded-full cursor-pointer bg-black bg-opacity-70 hover:bg-opacity-10 hover:bg-gray-400 h-8 gap-2 p-[2px]">
          <div className="w-7 h-7">
            <img
              className="w-7 h-7 rounded-full object-cover"
              src="https://i.scdn.co/image/ab6775700000ee85847d0b093983b0b312dc14db"
              alt="Emir"
            ></img>
          </div>
          <span className="hidden lg:block text-sm font-bold">Emir</span>
          <div className="hidden lg:block mr-[6px]">
            <Icon name="downArrow" size="16" />
          </div>
        </div>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-48 max-w-[350px] bg-menu origin-top-right rounded shadow-lg z-50 focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-white bg-opacity-10 text-white" : "text-link"
                  } group flex w-full justify-between items-center rounded-sm text-sm font-semibold p-3 gap-2 h-10`}
                >
                  Account
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-white bg-opacity-10 text-white" : "text-link"
                  } group flex w-full justify-between items-center rounded-sm text-sm font-semibold p-3 gap-2 h-10`}
                >
                  Profile
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-white bg-opacity-10 text-white" : "text-link"
                  } group flex w-full justify-between items-center rounded-sm text-sm font-bold p-3 gap-2 h-10`}
                >
                  Settings
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-white bg-opacity-10 text-white" : "text-link"
                  } group flex w-full justify-between items-center rounded-sm text-sm font-bold p-3 gap-2 h-10`}
                >
                  Log out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NavUser;
