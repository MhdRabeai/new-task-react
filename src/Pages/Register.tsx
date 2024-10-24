import React, { FunctionComponent } from "react";

const Register = () => {
  return (
    <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 mx-auto">
      <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-800">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
            Register
          </h2>
        </div>

        <form>
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
              {/* <div className="space-y-2">
                <input
                  id="af-account-password"
                  type="text"
                  className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px rounded-lg   sm:mt-0 sm:first:ms-0   text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Enter password"
                  name="password"
                />
              </div> */}
              <div className="max-w-sm">
                <div className="flex-1">
                  <input
                    type="password"
                    id="hs-strong-password-input"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                  />
                  <div
                    data-hs-strong-password='{
        "target": "#hs-strong-password-input",
        "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-green-500 h-2 flex-auto rounded-full bg-blue-500 opacity-50 mx-1"
      }'
                    id="strong-password"
                    className="flex mt-2 -mx-1"
                  ></div>
                </div>

                <div className="mb-3">
                  <span id="strong-password-weakness"></span>
                </div>
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
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
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
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
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
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              >
                <option value={""}>Select a Language</option>
                <option value={"JavaScript"}>JavaScript</option>
                <option value={"C++"}>C++</option>
                <option value={"Python"}>Python</option>
                <option value={"C#"}>C#</option>
              </select>
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
                    fill-rule="evenodd"
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
                BIO
              </label>
            </div>

            <div className="sm:col-span-9">
              <textarea
                id="detailes"
                className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Type your message..."
                rows={3}
                name="detailes"
              ></textarea>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="favcolor"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                favcolor
              </label>
            </div>
            <div className="sm:col-span-9">
              <input
                type="color"
                id="favcolor"
                className=" flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px rounded-lg   sm:mt-0 sm:first:ms-0   text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                name="favcolor"
              />
            </div>
          </div>

          <div className="mt-5 flex justify-end gap-x-2">
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            >
              Cancel
            </button>
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register as FunctionComponent;
