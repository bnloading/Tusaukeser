import React from "react";

function Animations() {
  // Add image preloading with error handling
  React.useEffect(() => {
    const img = new Image();
    img.src = `${process.env.PUBLIC_URL || ""}/images/bear.png`;
    img.onerror = (e) => console.error("Image failed to load:", e);
  }, []);

  const imagePath = `${process.env.PUBLIC_URL || ""}/images/bear.png`;

  return (
    <>
      <img
        src={imagePath}
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
        onError={(e) => {
          console.error("Image failed to load:", e);
          e.target.style.display = "none";
        }}
      />
      <img
        src={imagePath}
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
        onError={(e) => {
          console.error("Image failed to load:", e);
          e.target.style.display = "none";
        }}
      />
    </>
  );
}

export default Animations;
