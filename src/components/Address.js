import React, { useEffect, useRef } from "react";

function Address() {
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const address1Ref = useRef(null);
  const address2Ref = useRef(null);
  const timeRef = useRef(null);
  const buttonRef = useRef(null);

  const startAnimation = () => {
    const elements = [
      { ref: title1Ref, delay: 200 },
      { ref: address1Ref, delay: 400 },
      { ref: title2Ref, delay: 600 },
      { ref: address2Ref, delay: 800 },
      { ref: timeRef, delay: 1000 },
      { ref: buttonRef, delay: 1200 },
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
        threshold: 0.1,
      }
    );

    const addressElement = document.querySelector(".address");
    if (addressElement) {
      observer.observe(addressElement);
    }

    return () => {
      if (addressElement) {
        observer.unobserve(addressElement);
      }
    };
  }, []);

  return (
    <section
      className="address"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/Images/1.jfif)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#A0565E",
        padding: "24px 8px",
        boxSizing: "border-box",
        fontFamily: "Customfont, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "600px",
          marginLeft: 20,
          marginTop: 90,
          gap: 0,
        }}
      >
        <h2
          ref={title1Ref}
          style={{
            fontFamily: "KZAmour, sans-serif",
            fontSize: "2rem",
            marginBottom: "20px",
            color: "#A0565E",
          }}
        >
          Мекен-жайымыз
        </h2>
        <p
          ref={address1Ref}
          style={{
            fontSize: "1.2rem",
            marginBottom: "15px",
            lineHeight: "1.6",
            color: "#A0565E",
          }}
        >
          Семей қаласы, <br /> Мұратхана Бейсембаева 10,
          <br />
          КВ 9
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "600px",
          marginLeft: -110,
          marginTop: "10px",
        }}
      >
        <h2
          ref={title2Ref}
          style={{
            fontFamily: "KZAmour, sans-serif",
            fontSize: "2rem",
            marginBottom: "20px",
            color: "#A0565E",
          }}
        >
          Той
          <br />
          салтанаты:
        </h2>
        <p
          ref={address2Ref}
          style={{
            fontSize: "1.5rem",
            marginBottom: "15px",
            lineHeight: "1.6",
            color: "#A0565E",
          }}
        >
          22 шілде 2025 жыл
          <br />
        </p>
        <p
          ref={timeRef}
          style={{
            fontSize: "1.1rem",
            marginBottom: "15px",
            color: "#A0565E",
          }}
        >
          Басталу уақыты:
          <br />
          Үлкендерге: 2:00
          <br />
          Жастарға: 7 :00
        </p>
        <a
          ref={buttonRef}
          href="https://maps.google.com/?q=Муратхана+Бейсембаева+10"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "15px",
            padding: "10px 20px",
            background: "#ffb6c1",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(255,182,193,0.3)",
            transition: "all 0.3s ease",
          }}
        >
          Google Maps-тан көру
        </a>
      </div>
    </section>
  );
}

export default Address;
