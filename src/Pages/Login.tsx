import Loader from "Components/Loader";
import React, {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "Services/UserContext";

const Login = () => {
  const { setUser } = useUser();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLoading, setIsLoadind] = useState<boolean>(true);
  const [dataForm, setDataForm] = useState<any>({
    name: "",
    password: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setIsLoadind(false);
    }, 1000);

    return () => {};
  }, []);
  function togglePass() {
    setIsVisible((prevState) => !prevState);
  }
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setDataForm((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoadind(true);
    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
        credentials: "include",
      });
      if (res.ok) {
        setUser(true);
        setIsLoadind(false);
        navigate(`/`);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return isLoading ? (
    <Loader />
  ) : (
    <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 mx-auto">
      <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-800">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
            Login
          </h2>
        </div>

        <form id="uploadForm" onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="af-account-full-name"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Full name:
              </label>
              <div className="hs-tooltip inline-block">
                <svg
                  className="hs-tooltip-toggle ms-1 inline-block size-3 text-gray-400 dark:text-neutral-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </div>
            </div>

            <div className="sm:col-span-9">
              <div className="sm:flex">
                <input
                  id="af-account-full-name"
                  type="text"
                  className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px rounded-lg   sm:mt-0 sm:first:ms-0   text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Mhd..."
                  name="name"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="af-account-password"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Password:
              </label>
            </div>

            <div className="sm:col-span-9">
              <div className="relative">
                <input
                  id="af-account-password"
                  type={isVisible ? "text" : "password"}
                  className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px rounded-lg   sm:mt-0 sm:first:ms-0   text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Enter password"
                  name="password"
                  onChange={handleChange}
                  required
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 m-0 z-50"
                  type="button"
                  onClick={togglePass}
                >
                  {isVisible ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-5 flex justify-end gap-x-2">
            <button
              type="submit"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login as FunctionComponent;
