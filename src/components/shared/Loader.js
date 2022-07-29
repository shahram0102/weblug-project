import { Triangle } from "react-loader-spinner";

import React from "react";

function Loader() {
  return (
    <div
      style={{
        width: "100%",
        height: "1000px",
        display: "flex",
        justifyContent: "center",
        paddingTop:"20px"
      }}
    >
      <Triangle
        height="100"
        width="100"
        radius="9"
        color="black"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}

export default Loader;
