import React, {
  FormEvent,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { Datepicker } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import Loader from "./../Components/Loader";
const Register = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLoading, setIsLoadind] = useState(true);
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
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoadind(true);
    const formElement = document.getElementById(
      "uploadForm"
    ) as HTMLFormElement | null;
    if (formElement) {
      const formData = new FormData(formElement);
      try {
        const res = await fetch("http://localhost:4000/register", {
          method: "POST",
          body: formData,
          credentials: "include",
        });
        if (res.ok) {
          setIsLoadind(false);

          navigate("/login");
        }
      } catch (err) {
        console.log(err);
      }
    }
    // formData.forEach((value, key) => {
    //   console.log(`${key}: ${value}`);
    // });
  }
  return isLoading ? (
    <Loader />
  ) : (
    <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 mx-auto">
      <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-800">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
            Register
          </h2>
        </div>

        <form
          id="uploadForm"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
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
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="af-account-email"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Email:
              </label>
            </div>

            <div className="sm:col-span-9">
              <input
                id="af-account-email"
                type="email"
                className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px rounded-lg   sm:mt-0 sm:first:ms-0   text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Exp@site.com"
                name="email"
              />
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

            <div className="sm:col-span-3">
              <div className="inline-block">
                <label
                  htmlFor="af-account-phone"
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                >
                  Phone:
                </label>
                <span className="text-sm text-gray-400 dark:text-neutral-600">
                  (Optional)
                </span>
              </div>
            </div>

            <div className="sm:col-span-9">
              <div className="sm:flex">
                <input
                  id="af-account-phone"
                  type="text"
                  className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px rounded-lg   sm:mt-0 sm:first:ms-0   text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="+x(xxx)xxx-xx-xx"
                  name="phone"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <div className="inline-block">
                <label
                  htmlFor="loccation"
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                >
                  Location:
                </label>
              </div>
            </div>

            <div className="sm:col-span-9">
              <div className="sm:flex">
                <input
                  id="loccation"
                  type="text"
                  className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px rounded-lg   sm:mt-0 sm:first:ms-0   text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Damascus-Syria"
                  name="location"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="af-account-gender-checkbox"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Gender:
              </label>
            </div>

            <div className="sm:col-span-9">
              <div className="sm:flex">
                <label
                  htmlFor="af-account-gender-checkbox"
                  className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                >
                  <input
                    type="radio"
                    name="gender"
                    className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="af-account-gender-checkbox"
                    value={"Male"}
                  />
                  <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                    Male
                  </span>
                </label>

                <label
                  htmlFor="af-account-gender-checkbox-other"
                  className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                >
                  <input
                    type="radio"
                    name="gender"
                    className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="af-account-gender-checkbox-other"
                    value={"female"}
                  />
                  <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                    Female
                  </span>
                </label>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="af-account-gender-checkbox"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Favorite Lang:
              </label>
            </div>
            <div className="sm:col-span-9">
              <select
                id="af-submit-app-category"
                name="favLang"
                className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px rounded-lg   sm:mt-0 sm:first:ms-0   text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              >
                <option value={""}>Select a Language</option>
                <option value={"JavaScript"}>JavaScript</option>
                <option value={"C++"}>C++</option>
                <option value={"Python"}>Python</option>
                <option value={"C#"}>C#</option>
              </select>
            </div>
            <div className="sm:col-span-3">
              <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                Your Birthday:
              </label>
            </div>
            <div className="sm:col-span-9">
              <div className="relative">
                <Datepicker className="Datepicker" name="date" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="af-account-gender-checkbox"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                What Do You Know?
              </label>
            </div>

            <div className="sm:col-span-9">
              <div className="sm:flex">
                <label
                  htmlFor="html"
                  className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                >
                  <input
                    type="checkbox"
                    name="webLang"
                    className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="html"
                    value={"HTML"}
                  />
                  <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                    HTML
                  </span>
                </label>

                <label
                  htmlFor="CSS"
                  className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                >
                  <input
                    type="checkbox"
                    name="webLang"
                    className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="CSS"
                    value={"CSS"}
                  />
                  <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                    CSS
                  </span>
                </label>
                <label
                  htmlFor="Js"
                  className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                >
                  <input
                    type="checkbox"
                    name="webLang"
                    className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="Js"
                    value={"javaScript"}
                  />
                  <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                    javaScript
                  </span>
                </label>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="favcolor"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Favcolor:
              </label>
            </div>
            <div className="sm:col-span-9">
              <input
                type="color"
                id="favcolor"
                className="p-1 h-10 w-full block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700"
                name="favcolor"
              />
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="favcolor"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                How old Are You?
              </label>
            </div>
            <div className="sm:col-span-9">
              <div className="relative mb-6">
                <input
                  type="range"
                  className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px rounded-lg   sm:mt-0 sm:first:ms-0   text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 "
                  aria-orientation="horizontal"
                  min="20"
                  max="50"
                  step="1"
                  name="old"
                />
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-3 -bottom-6">
                  20
                </span>

                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                  30
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                  40
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-3 -bottom-6">
                  50
                </span>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="af-account-bio"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Cv:
              </label>
            </div>
            <div className="sm:col-span-9">
              <label
                htmlFor="myfile"
                className="group p-4 sm:p-7 block cursor-pointer text-center border-2 border-dashed border-gray-200 rounded-lg focus-within:outline-none  dark:border-neutral-700"
              >
                <input
                  id="myfile"
                  name="myfile"
                  type="file"
                  className="sr-only"
                  accept="application/pdf"
                />
                <svg
                  className="size-10 mx-auto text-gray-400 dark:text-neutral-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
                  ></path>
                  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"></path>
                </svg>
                <span className="mt-2 block text-sm text-gray-800 dark:text-neutral-200">
                  Browse your device
                </span>
                <span className="mt-1 block text-xs text-gray-500 dark:text-neutral-500">
                  Maximum file size is 2 MB
                </span>
              </label>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="detailes"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Bio:
              </label>
            </div>

            <div className="sm:col-span-9">
              <textarea
                id="detailes"
                className="resize-none	 flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px rounded-lg   sm:mt-0 sm:first:ms-0   text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Type your message..."
                rows={3}
                name="detailes"
              ></textarea>
            </div>
          </div>

          <div className="mt-5 flex justify-end gap-x-2">
            <button
              type="submit"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register as FunctionComponent;
