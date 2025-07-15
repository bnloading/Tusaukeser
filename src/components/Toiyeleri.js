import React, { useEffect, useRef } from "react";

function Toiyeleri() {
  const titleRef = useRef(null);
  const priceRef = useRef(null);
  const timeRef = useRef(null);

  const startAnimation = () => {
    const elements = [
      { ref: titleRef, delay: 200 },
      { ref: priceRef, delay: 400 },
      { ref: timeRef, delay: 600 },
    ];

    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        ref.current.style.opacity = "0";
        ref.current.style.transform = "translateY(50px)";

        setTimeout(() => {
          ref.current.style.transition =
            "all 1s cubic-bezier(.68,-0.55,.27,1.55)";
          ref.current.style.opacity = "1";
          ref.current.style.transform = "translateY(0)";
        }, delay);
      }
    });
  };

  useEffect(() => {
    startAnimation();

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          startAnimation();
        }
      },
      {
        threshold: 0.1,
      }
    );

    const toiElement = document.querySelector(".toiyeleri");
    if (toiElement) {
      observer.observe(toiElement);
    }

    return () => {
      if (toiElement) {
        observer.unobserve(toiElement);
      }
    };
  }, []);

  return (
    <section
      className="toiyeleri"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/Images/4.jfif)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px 8px",
        boxSizing: "border-box",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0)",
          borderRadius: "20px",
          padding: "30px",
          maxWidth: "600px",
          width: "90%",
          textAlign: "center",
          boxShadow: "0 4px 20px rgba(160, 86, 94, 0.1)",
        }}
      >
        <h2
          ref={titleRef}
          style={{
            fontFamily: "KZAmour, sans-serif",
            fontSize: "2.2rem",
            marginBottom: "30px",
            color: "#A0565E",
          }}
        >
          Той Иелері
        </h2>
        <div
          ref={priceRef}
          style={{
            fontSize: "1.4rem",
            marginBottom: "25px",
            color: "#A0565E",
            fontFamily: "Customfont, sans-serif",
            lineHeight: "1.8",
          }}
        >
          <p style={{ margin: "10px 0" }}>Әкесі: Сымбат</p>
          <p style={{ margin: "10px 0" }}>Анасы: Алтынай</p>
        </div>
      </div>
    </section>
  );
}

export default Toiyeleri;
