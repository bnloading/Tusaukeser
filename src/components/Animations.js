import React from "react";

function Animations() {
  // Add image preloading
  React.useEffect(() => {
    const img = new Image();
    img.src = "/images/bear.png";
  }, []);

  return (
    <>
      <img
        src="/images/bear.png"
        alt="balloon"
        style={{
          position: "fixed",
          top: "91%",
          right: "20px",
          width: "80px",
          height: "auto",
          animation: "float 3s ease-in-out infinite",
          zIndex: 10,
          objectFit: "contain",
        }}
        loading="eager"
      />
      <img
        src="/images/bear.png"
        alt="teddy"
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          width: "80px",
          height: "auto",
          animation: "bounce 2s ease-in-out infinite",
          zIndex: 10,
          objectFit: "contain",
        }}
        loading="eager"
      />
    </>
  );
}

export default Animations;
