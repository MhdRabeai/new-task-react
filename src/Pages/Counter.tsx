import { useQuery } from "@tanstack/react-query";
import Loader from "Components/Loader";
import React, { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Counter = () => {
  const [isLoading, setIsLoadind] = useState(true);
  const [counterDate, setCounterDate] = useState<any>("");
  const navigate = useNavigate();
  const { error } = useQuery({
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
        {/* <div className="my-4 py-2 overflow-hidden sm:-mx-6 sm:px-6 lg:mx-8 lg:px-8">
          <div className="flex flex-col items-center justify-center  align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200 py-4 gap-2">
            <h1 className="text-3xl font-thin mb-4 dark:text-white">
              👋 Hello There! 🌎
            </h1>
            <p className="text-xl mb-4 dark:text-white">
              Counter: {counterDate && counterDate[0]["counter"]}
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
        </div> */}

        <div className="pt-8 py-2 overflow-hidden sm:mx-6 sm:px-6 lg:px-8 w-1/3 md:mx-auto">
          <h1 className="text-3xl font-thin mb-4 dark:text-white text-center">
            👋 Hello There! 🌎
          </h1>
          <div
            className="bg-white border border-gray-200 rounded-lg dark:bg-neutral-700 dark:border-neutral-700"
            data-hs-input-number=""
          >
            <div className="w-full flex justify-between items-center gap-x-1">
              <div className="grow py-2 px-3">
                <input
                  className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:text-white"
                  style={{ appearance: "textfield" }}
                  type="number"
                  aria-roledescription="Number field"
                  value={counterDate && counterDate[0]["counter"]}
                  data-hs-input-number-input=""
                  readOnly
                />
              </div>
              <div className="flex items-center -gap-y-px divide-x divide-gray-200 border-s border-gray-200 dark:divide-neutral-700 dark:border-neutral-700">
                <button
                  type="button"
                  className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-medium last:rounded-e-lg bg-white text-gray-800 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  aria-label="Decrease"
                  data-hs-input-number-decrement=""
                  onClick={fetchDisCounter}
                >
                  <svg
                    className="shrink-0 size-3.5"
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
                    <path d="M5 12h14"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-medium last:rounded-e-lg bg-white text-gray-800 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  aria-label="Increase"
                  data-hs-input-number-increment=""
                  onClick={fetchIncCounter}
                >
                  <svg
                    className="shrink-0 size-3.5"
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
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter as FunctionComponent;
