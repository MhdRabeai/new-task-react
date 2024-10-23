import React from "react";
import { InfinitySpin } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="loader">
      <InfinitySpin width="200" color="#2650cd" />
    </div>
  );
};

export default Loader;
