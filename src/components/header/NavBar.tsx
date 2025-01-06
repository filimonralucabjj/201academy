import { useState, useRef, useEffect } from "react";
import logo from "../../assets/logo.svg";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../pageUtils/LanguageSelector";

export const NavBar = () => {
  const [t] = useTranslation("global");
  type ItemType = {
    id: number;
    isActive: boolean;
    title: string;
    url: string;
  };
  const navigationItems: ItemType[] = t("navigation", {
    returnObjects: true,
  }) as ItemType[];
  const [openNavigation, setOpenNavigation] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenNavigation(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside); // Listen for clicks outside
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up the listener on unmount
    };
  }, []);

  const linkClass = (isActive: boolean) =>
    isActive
      ? "bg-zinc-900/70 hover:bg-zinc-900 rounded-md px-4 py-3 cursor-pointer"
      : "hover:bg-zinc-900/70 rounded-md px-4 py-3 cursor-pointer";
  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-20 bg-clip-padding backdrop-blur z-50">
      <div
        className={`${
          openNavigation ? "bg-zinc-950" : ""
        } mx-auto max-w-7xl px-6 sm:px-10 lg:px-8`}
      >
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 justify-center items-stretch">
            <div className="flex flex-shrink-0 items-center mr-4">
              <img className="h-14 w-auto" src={logo} alt="React Jobs" />
            </div>
            <div className="ml-auto inline-flex items-center justify-center text-sm rounded-lg lg:hidden">
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg text-gray-400 hover:bg-zinc-900/70"
                aria-controls="navbar-default"
                aria-expanded="false"
                onClick={toggleNavigation}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`${
                openNavigation ? "flex pb-[5rem]" : "hidden"
              } bg-zinc-950 fixed top-[5rem] left-0 right-0 lg:bg-transparent lg:static lg:flex ml-auto items-center justify-center`}
            >
              <div ref={menuRef}
                className={`${
                  openNavigation ? "relative z-2 flex flex-col" : "space-x-2"
                } lg:block items-center justify-center m-auto`}
              >
                {navigationItems.map((item: ItemType) => (
                  <a
                    className={linkClass(item.isActive)}
                    key={item.id}
                    onClick={(e) => {
                      let element = document.getElementById(`${item.url}`);
                      e.preventDefault();
                      element?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
