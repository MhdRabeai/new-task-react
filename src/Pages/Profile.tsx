import { useQuery } from "@tanstack/react-query";
import Loader from "Components/Loader";
import React, { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [isLoading, setIsLoadind] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
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

        return data;
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    },
  });
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    navigate("/404");
  }
  return (
    <div className="container px-0 md:px-5 mt-4 mx-2 md:mx-auto dark:text-white">
      Profile
    </div>
  );
};

export default Profile as FunctionComponent;
