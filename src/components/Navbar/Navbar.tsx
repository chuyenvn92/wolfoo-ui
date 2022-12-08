import clsx from "clsx";
import { useMemo, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { useAppDispatch } from "../../app/hooks";
import { getDiariesApi } from "../../features/diaries/diariesSlice";

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
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDiariesApi());
  }, [dispatch]);

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
    <div className="xl:px-12 mx-9">
      <div className="w-full mx-auto max-w-7xl">
        <div className="flex justify-between">
          <Link to={"/"}>
            <img src={logo} alt="new_logo" className="hidden xl:block" />
          </Link>
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
      </div>
    </div>
  );
}
