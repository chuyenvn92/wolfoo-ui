import clsx from "clsx";
import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logo-new.png";

const menuKey = {
  homepage: "Home page",
  aboutus: "About us",
  characters: "Characters",
  diaries: "Diaries",
  activities: "Activities",
  shopOnline: "Shop online",
};

export default function Navbar() {
  const location = useLocation();

  const [currentPath, setCurrentPath] = useState(location.pathname);

  const menuList = useMemo(
    () => [
      {
        name: menuKey.homepage,
        path: "/",
      },
      {
        name: menuKey.aboutus,
        path: "/about-us",
      },
      {
        name: menuKey.characters,
        path: "/characters",
      },
      {
        name: menuKey.diaries,
        path: "/diaries",
      },
      {
        name: menuKey.activities,
        path: "/activities",
      },
      {
        name: menuKey.shopOnline,
        path: "/shop",
      },
    ],
    []
  );

  const handleMenu = (path: string) => () => {
    setCurrentPath(path);
  };

  return (
    <div className="flex justify-between px-12 mx-9 max-w-7xl">
      <img src={logo} alt="new_logo" />
      <div className="flex items-center">
        {menuList.map(({ name, path }, index) => {
          return (
            <Link
              key={index}
              to={path}
              className={clsx(
                "pl-8 py-[10px] px-[15px] text-lg uppercase whitespace-nowrap text-jadestone",
                path === currentPath && "text-bus-yellow"
              )}
              onClick={handleMenu(path)}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
