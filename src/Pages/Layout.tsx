import React, { FunctionComponent, Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Loader from "../Components/Loader";
// import { useQuery } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";
import { UserProvider } from "Services/UserContext";

const Layout = () => {
  const [isUser, setIsUser] = useState(false);
  const [isLoading, setIsLoadind] = useState(true);
  // const [isDataFetched, setIsDataFetched] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    // if (!isDataFetched) {
    //   fetchProtectedResource();
    // }
    setTimeout(() => {
      setIsLoadind(false);
    }, 2000);
    return () => {};
  }, [isUser]);
  // async function fetchProtectedResource() {
  //   try {
  //     const response = await fetch("http://localhost:4000/");
  //     if (response.ok) {
  //       setIsUser(true);
  //     }
  //     setIsDataFetched(true);
  //   } catch (err) {
  //     console.error("Error fetching data:", err);
  //   }
  // }
  return (
    <div className="dark:bg-[#121212] min-h-screen relative ">
      <UserProvider user={isUser} setUser={setIsUser}>
        <Header />
        <Suspense fallback={<Loader />}>
          {isLoading ? <Loader /> : <Outlet />}
        </Suspense>
      </UserProvider>
    </div>
  );
};

export default Layout as FunctionComponent;
