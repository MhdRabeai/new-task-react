import { useQuery } from "@tanstack/react-query";
import Loader from "Components/Loader";
import React, { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Counter = () => {
  const [isLoading, setIsLoadind] = useState(true);
  const [counterDate, setCounterDate] = useState<any>("");
  const navigate = useNavigate();
  const { error, data } = useQuery({
    queryKey: ["counter"],
    queryFn: async () => {
      setIsLoadind(true);
      try {
        const response = await fetch("http://localhost:4000/counter", {
          method: "GET",
          credentials: "include",
        });

        const data = await response.json();
        setCounterDate(data);
        return data;
      } catch (err) {
        console.error("Error fetching Counter:", err);
      }
    },
  });
  useEffect(() => {
    setTimeout(() => {
      setIsLoadind(false);
    }, 2000);
  }, []);
  async function fetchIncCounter() {
    try {
      const response = await fetch("http://localhost:4000/counter/inc", {
        method: "POST",
        credentials: "include",
      });

      const data = await response.json();
      setCounterDate(data);
      return data;
    } catch (err) {
      console.error("Error fetching Counter:", err);
    }
  }
  async function fetchDisCounter() {
    if (+counterDate[0]["counter"] > 0) {
      try {
        const response = await fetch("http://localhost:4000/counter/dis", {
          method: "POST",
          credentials: "include",
        });

        const data = await response.json();
        setCounterDate(data);
        return data;
      } catch (err) {
        console.error("Error fetching Counter:", err);
      }
      return;
    }
  }

  if (error) {
    navigate("/404");
  }
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className="container mx-auto">
        <div className="my-4 py-2 overflow-hidden sm:-mx-6 sm:px-6 lg:mx-8 lg:px-8">
          <div className="flex flex-col items-center justify-center  align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200 py-4 gap-2">
            <h1 className="text-3xl font-thin mb-4 dark:text-white">
              👋 Hello There! 🌎
            </h1>
            <p className="text-xl mb-4 dark:text-white">
              Counter: {counterDate[0]["counter"]}
            </p>
            <div className="flex gap-4">
              <button
                className="bg-[#dc2626] hover:bg-[#991b1b] text-white font-bold py-3 px-5 rounded-full text-center"
                onClick={fetchDisCounter}
              >
                -
              </button>
              <button
                className=" bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-5 rounded-full "
                onClick={fetchIncCounter}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter as FunctionComponent;
