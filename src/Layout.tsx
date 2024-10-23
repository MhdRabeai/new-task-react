import React, { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Loader from "./Components/Loader";

const Layout = () => {
  return (
    <div className="dark:bg-[#121212] h-screen relative ">
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
