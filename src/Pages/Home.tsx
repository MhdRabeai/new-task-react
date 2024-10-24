import { FunctionComponent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { useQuery } from "@tanstack/react-query";
import { useUser } from "Services/UserContext";
import Loader from "Components/Loader";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}
function Home() {
  const location = useLocation();
  const { user, setUser } = useUser();
  const [isLoading, setIsLoadind] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // if (!isDataFetched) {
    //   fetchProtectedResource();
    // }
    // fetchCounter();
    setTimeout(() => {
      setIsLoadind(false);
    }, 2000);
  }, []);
  const { error, data } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      setIsLoadind(true);
      try {
        const response = await fetch("http://localhost:4000/", {
          method: "GET",
          credentials: "include",
        });
        if (!response.ok) {
          navigate("/login");
          setIsLoadind(false);
        }
        const data = await response.json();
        setUser(true);
        console.log(data);
        return data;
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    },
  });
  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname, user]);
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    navigate("/404");
  }
  return (
    <div className="container px-0 md:px-5 mt-4  md:mx-auto dark:text-white">
      {data["name"].toUpperCase()}
    </div>
  );
}

export default Home as FunctionComponent;
