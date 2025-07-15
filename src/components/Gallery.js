import React from "react";

function Gallery() {
  return (
    <section
      className="gallery"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/Images/3.jfif)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        padding: "24px 8px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: 0,
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "KZAmour, sans-serif",
            fontSize: "2rem",
            margin: 0,
          }}
        >
          Галерея
        </h2>
      </div>
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: 0,
          width: "100%",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "justanotherfont, sans-serif",
            fontSize: "1.2rem",
            margin: 0,
          }}
        >
          Бақытты сәттерімізбен бөлісеміз!
        </p>
      </div>
    </section>
  );
}

export default Gallery;
