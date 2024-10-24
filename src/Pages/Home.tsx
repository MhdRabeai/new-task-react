import { FunctionComponent, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { useQuery, useQueryClient } from "@tanstack/react-query";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}
function Home() {
  const location = useLocation();
  // const queryClient = useQueryClient()

  // // Queries
  // const query = useQuery({ queryKey: ['user'], queryFn: getTodos })
  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);
  return (
    <div className="container px-0 md:px-5 mt-4  md:mx-auto dark:text-white">
      Home
    </div>
  );
}

export default Home as FunctionComponent;
