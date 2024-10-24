import React, { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
type UserProps = {
  user: boolean;
};

const Header: FC<UserProps> = ({ user }) => {
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap justify-center md:flex-nowrap z-50 w-full text-sm mb-4">
      <nav className="mt-4 relative max-w-2xl w-full bg-white border border-gray-200 rounded-[2rem] mx-2 py-2.5 md:flex md:items-center md:justify-between md:py-0 md:px-4 md:mx-auto dark:bg-[#242424] dark:border-neutral-700">
        <div className="px-4 md:px-0 flex justify-between items-center">
          <div>
            <NavLink
              className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80 text-blue-500"
              to={"/"}
              aria-label="Preline"
            >
              Mhd.
            </NavLink>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle flex justify-center items-center size-6 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              id="hs-navbar-header-floating-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-header-floating"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-header-floating"
            >
              <svg
                className="hs-collapse-open:hidden shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="hs-navbar-header-floating"
          className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block"
          aria-labelledby="hs-navbar-header-floating-collapse"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "active py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2  font-medium text-blue-500  focus:outline-none dark:border-neutral-200 dark:text-neutral-200 dark:border-gray-800 border-blue-500"
                  : "py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200"
              }
              to="/"
              aria-current="page"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "active py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2  font-medium text-blue-500  focus:outline-none dark:border-neutral-200 dark:text-neutral-200 dark:border-gray-800 border-blue-500"
                  : "py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200"
              }
              to="/profile"
            >
              Profile
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "active py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2  font-medium text-blue-500  focus:outline-none dark:border-neutral-200 dark:text-neutral-200 dark:border-gray-800 border-blue-500"
                  : "py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200"
              }
              to="/counter"
            >
              Counter
            </NavLink>
            <div className="my-2 md:my-0 md:mx-2">
              <div className="w-full h-px md:w-px md:h-4 bg-gray-100 md:bg-gray-300 dark:bg-neutral-700"></div>
            </div>

            <div className="px-4 md:px-0 flex items-center gap-2 justify-between">
              <div className="hs-dropdown">
                <button
                  id="hs-dropdown-dark-mode"
                  type="button"
                  className="hs-dropdown-toggle hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600 font-medium dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500 "
                  aria-haspopup="menu"
                  aria-expanded="false"
                  aria-label="Dropdown"
                >
                  <svg
                    className="hs-dark-mode-active:hidden block size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </svg>
                  <svg
                    className="hs-dark-mode-active:block hidden size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </svg>
                </button>

                <div
                  id="selectThemeDropdown"
                  className="hs-dropdown-menu hs-dropdown-open:opacity-100 mt-2 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 origin-bottom-left bg-white shadow-md rounded-lg p-1 space-y-0.5 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="hs-dropdown-dark-mode"
                >
                  <button
                    type="button"
                    className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                    data-hs-theme-click-value="default"
                  >
                    Default (Light)
                  </button>
                  <button
                    type="button"
                    className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                    data-hs-theme-click-value="dark"
                  >
                    Dark
                  </button>
                  <button
                    type="button"
                    className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                    data-hs-theme-click-value="auto"
                  >
                    Auto (System)
                  </button>
                </div>
              </div>

              {user === true ? (
                <div className="logout cursor-pointer  text-gray-600 hover:text-[#991b1b] focus:outline-none  font-medium dark:text-[#b91c1c]  dark:hover:text-[#991b1b] ">
                  <CiLogin />
                </div>
              ) : (
                <div className="hs-dropdown">
                  <button
                    id="hs-dropdown-with-icons"
                    type="button"
                    className="logout hs-dropdown-toggle hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600 font-medium dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500 "
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                  >
                    <CiLogout />
                  </button>
                  <div
                    id="hs-dropdown-with-icons"
                    className="hs-dropdown-menu hs-dropdown-open:opacity-100 mt-2 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 origin-bottom-left bg-white shadow-md rounded-lg p-1 space-y-0.5 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="hs-dropdown-with-icons"
                  >
                    <Link
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                      to="/login"
                    >
                      Login
                    </Link>
                    <Link
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                      to="/register"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
