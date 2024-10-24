import React, { FunctionComponent, Suspense, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Loader from "../Components/Loader";
// import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// import Register from "./Register";

const Layout = () => {
  const [isUser, setIsUser] = useState(false);
  const [isLoading, setIsLoadind] = useState(true);
  const [isDataFetched, setIsDataFetched] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    if (!isDataFetched) {
      fetchProtectedResource();
    }
    setTimeout(() => {
      setIsLoadind(false);
    }, 2000);
    return () => {};
  }, [isUser]);
  async function fetchProtectedResource() {
    try {
      const response = await fetch("http://localhost:4000/");
      if (response.ok) {
        setIsUser(true);
      }
      setIsDataFetched(true);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }
  return (
    <div className="dark:bg-[#121212] h-screen relative ">
      <Header user={isUser} />
      <Suspense fallback={<Loader />}>
        {isLoading ? <Loader /> : <Outlet />}
      </Suspense>
    </div>
  );
};

export default Layout as FunctionComponent;
