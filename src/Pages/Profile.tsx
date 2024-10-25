import { useQuery } from "@tanstack/react-query";
import Loader from "Components/Loader";
import React, { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
interface DataResponse {
  id: number;
  name: string;
  email: string;
  Phone: string;
  location: string;
  gender: string;
  favLang: string;
  detailes: string;
  webLang: [];
  favcolor: string;
  birthday: string;
  old: string;
  fileName: any;
}
const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  const { error, data } = useQuery<DataResponse[], Error>({
    queryKey: ["data"],
    queryFn: async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:4000/", {
          method: "GET",
          credentials: "include",
        });
        if (!response.ok) {
          navigate("/login");
          setIsLoading(false);
          return [];
        }
        const jsonData: DataResponse[] = await response.json();
        return jsonData;
      } catch (err) {
        console.error("Error fetching data:", err);
        setIsLoading(false);
        throw err;
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
    <div className="flex justify-between px-4 mx-auto max-w-screen-xl  px-0 md:px-5 mt-4 mx-2 md:mx-auto dark:text-white">
      {data &&
        [data].map((item: any) => (
          <div key={item.id} className="container mx-auto">
            <div className="flex flex-col">
              <div className="my-4 py-2 overflow-hidden sm:-mx-6 sm:px-6 lg:mx-8 lg:px-8">
                <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 border-b border-gray-200 dark:bg-[#6e6b6b] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider dark:text-white">
                          ID: {item.id}
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 dark:bg-[#6e6b6b] bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider dark:text-white">
                          Name: {item.name}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-[#242424]">
                      <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm leading-5 font-medium text-gray-900 dark:text-white">
                                Email:
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-900 dark:text-white">
                            {item.email}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm leading-5 font-medium text-gray-900 dark:text-white">
                                Phone Number:
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-900 dark:text-white">
                            {item.Phone}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm leading-5 font-medium text-gray-900 dark:text-white">
                                Location:
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-900 dark:text-white">
                            {item.location}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm leading-5 font-medium text-gray-900 dark:text-white">
                                Gender:
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-900 dark:text-white">
                            {item.gender}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm leading-5 font-medium text-gray-900 dark:text-white">
                                favorate Programming Languae:
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-900 dark:text-white">
                            {item.favLang}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm leading-5 font-medium text-gray-900 dark:text-white">
                                Detailes:
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-900 dark:text-white">
                            {item.detailes}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm leading-5 font-medium text-gray-900 dark:text-white">
                                Web Languages:
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-900 dark:text-white">
                            <ul>
                              {item.webLang
                                .filter((ele: any) => ele)
                                .map((e: any, i: any) => (
                                  <li key={i}>- {e}</li>
                                ))}
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm leading-5 font-medium text-gray-900  dark:text-white">
                                Fav color:
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="">
                            <p
                              className={`w-6 h-6 rounded-full dark:text-white`}
                              style={{ background: `${item.favcolor}` }}
                            ></p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm leading-5 font-medium text-gray-900 dark:text-white">
                                Birthday:
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-900 dark:text-white">
                            {item.birthday}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm leading-5 font-medium text-gray-900 dark:text-white">
                                Age:
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-900 dark:text-white">
                            {item.old} Years old
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-no-wrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm leading-5 font-medium text-gray-900 dark:text-white">
                                Cv:
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                          <a
                            href={`http://localhost:4000/download/${item.fileName}`}
                            className="text-sm leading-5 rounded bg-[#3e82f8] hover:bg-[#365fa5] py-1 px-3 text-white "
                          >
                            Download
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Profile as FunctionComponent;
