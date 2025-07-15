import React from "react";

function Animations() {
  return (
    <>
      <img
        src={process.env.PUBLIC_URL + "/images/bear.png"}
        alt="balloon"
        style={{
          position: "fixed",
          top: "90%",
          right: "20px",
          width: "80px",
          height: "auto",
          animation: "float 3s ease-in-out infinite",
          zIndex: 10,
        }}
      />
      <img
        src={process.env.PUBLIC_URL + "/images/bear.png"}
        alt="teddy"
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          width: "80px",
          height: "auto",
          animation: "bounce 2s ease-in-out infinite",
          zIndex: 10,
        }}
      />
    </>
  );
}

export default Animations;
