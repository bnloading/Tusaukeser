import React, { useEffect, useRef } from "react";

function Hero() {
  const h1Ref = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    if (h1Ref.current) {
      h1Ref.current.style.opacity = 0;
      h1Ref.current.style.transform = "translateX(-80px)";
      setTimeout(() => {
        h1Ref.current.style.transition =
          "all 1.7s cubic-bezier(.68,-0.55,.27,1.55)";
        h1Ref.current.style.opacity = 1;
        h1Ref.current.style.transform = "translateX(0)";
      }, 200);
    }
    if (imgRef.current) {
      imgRef.current.style.opacity = 0;
      imgRef.current.style.transform = "translateX(80px)";
      setTimeout(() => {
        imgRef.current.style.transition =
          "all 1.7s cubic-bezier(.68,-0.55,.27,1.55)";
        imgRef.current.style.opacity = 1;
        imgRef.current.style.transform = "translateX(0)";
      }, 400);
    }
  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/Images/3.jfif)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#A0565E",
        paddingTop: 0,
        paddingBottom: 180,
        boxSizing: "border-box",
        overflow: "hidden",
        gap: "20px",
      }}
    >
      <h2
        style={{
          fontFamily: "KZAmour, sans-serif",
          fontSize: "2rem",
          marginTop: 50,
          textAlign: "center",
        }}
      >
        Тұсаукесер
      </h2>
      <h1
        ref={h1Ref}
        style={{
          fontFamily: "KZAmour, sans-serif",
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        Медина мен Милана
      </h1>
      <img
        ref={imgRef}
        src={"/Images/2.jpeg"}
        alt="jus"
        style={{
          position: "absolute",
          bottom: 50,
          width: "80%",
          height: "30%",
          objectFit: "cover",
        }}
      />
    </section>
  );
}

export default Hero;
