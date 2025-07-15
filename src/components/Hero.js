import React, { useEffect, useRef } from "react";
import MusicPlayer from "./MusicPlayer";

function Hero() {
  const h1Ref = useRef(null);
  const imgRef = useRef(null);
  const animationTriggeredRef = useRef(false);

  const startAnimation = () => {
    // Text animation
    if (h1Ref.current) {
      h1Ref.current.style.opacity = "0";
      h1Ref.current.style.transform = "translateY(50px)"; // Changed from translateX to translateY

      setTimeout(() => {
        h1Ref.current.style.transition =
          "all 1.5s cubic-bezier(.68,-0.55,.27,1.55)";
        h1Ref.current.style.opacity = "1";
        h1Ref.current.style.transform = "translateY(0)"; // Changed from translateX to translateY
      }, 800);
    }

    // Image animation
    if (imgRef.current) {
      imgRef.current.style.opacity = "0";
      imgRef.current.style.transform = "translate(-50%, 80px)"; // Added Y translation

      setTimeout(() => {
        imgRef.current.style.transition =
          "all 1.5s cubic-bezier(.68,-0.55,.27,1.55)";
        imgRef.current.style.opacity = "1";
        imgRef.current.style.transform = "translate(-50%, 0)"; // Added Y translation
      }, 800);
    }

    animationTriggeredRef.current = true;
  };

  useEffect(() => {
    // Initial animation
    startAnimation();

    // Add scroll event listener with Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          startAnimation();
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
      }
    );

    const heroElement = document.querySelector(".hero");
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []); // Only run on mount

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/Images/3.jfif)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        minHeight: "120vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#A0565E",
        paddingTop: 0,
        paddingBottom: 180,
        boxSizing: "border-box",
        overflow: "hidden",
        gap: "10px",
        position: "relative",
      }}
    >
      <h3
        style={{
          position: "absolute",
          top: "10%",
          left: "60%",
          fontSize: "2.5rem",
          fontFamily: "KZAmour, sans-serif",
          color: "#A0565E",
          textAlign: "center",
          margin: "20px 0",
        }}
      >
        1 жас
      </h3>
      <MusicPlayer
        style={{
          position: "absolute",
          top: "50px",
          left: "80%",
          transform: "translateX(-50%)",
          zIndex: 1000,
        }}
      />
      <h2
        style={{
          fontFamily: "KZAmour, sans-serif",
          fontSize: "2rem",
          marginTop: 10,
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
          bottom: 80,
          left: "50%",
          transform: "translateX(-50%)",
          width: "90vw",
          maxWidth: "600px",
          height: "40%",
          objectFit: "cover",
        }}
      />
    </section>
  );
}

export default Hero;
