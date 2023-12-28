import React from "react";
import { RotateLoader } from "react-spinners";

function Loader() {
  return (
    <div className="flex justify-center items-center">
      <RotateLoader color="#a855f7" />
    </div>
  );
}

export default Loader;
