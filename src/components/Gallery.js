import React, { useEffect, useRef } from "react";

function Gallery() {
  const textRef = useRef(null);
  const h1Ref = useRef(null);
  const textRef2 = useRef(null);
  const animationTriggeredRef = useRef(false);

  const startAnimation = () => {
    if (textRef2.current) {
      textRef.current.style.opacity = "0";
      textRef.current.style.transform = "translateY(50px)"; // Changed to translateY

      setTimeout(() => {
        textRef2.current.style.transition =
          "all 1.5s cubic-bezier(.68,-0.55,.27,1.55)";
        textRef2.current.style.opacity = "1";
        textRef2.current.style.transform = "translateY(0)"; // Move up
      }, 400);
    }

    // Text animation
    if (textRef.current) {
      textRef.current.style.opacity = "0";
      textRef.current.style.transform = "translateY(50px)"; // Changed to translateY

      setTimeout(() => {
        textRef.current.style.transition =
          "all 1.5s cubic-bezier(.68,-0.55,.27,1.55)";
        textRef.current.style.opacity = "1";
        textRef.current.style.transform = "translateY(0)"; // Move up
      }, 800);
    }

    // H1 animation
    if (h1Ref.current) {
      h1Ref.current.style.opacity = "0";
      h1Ref.current.style.transform = "translateY(50px)"; // Changed to translateY

      setTimeout(() => {
        h1Ref.current.style.transition =
          "all 1.5s cubic-bezier(.68,-0.55,.27,1.55)";
        h1Ref.current.style.opacity = "1";
        h1Ref.current.style.transform = "translateY(0)"; // Move up
      }, 1200); // Slightly delayed after text
    }

    animationTriggeredRef.current = true;
  };

  useEffect(() => {
    // Бастапқы анимация
    startAnimation();

    // Скролл оқиғасын тыңдаушыны қосу, Intersection Observer көмегімен
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          startAnimation();
        }
      },
      {
        threshold: 0.1, // Элементтің 10% көрінгенде іске қосу
      }
    );

    const galleryElement = document.querySelector(".gallery");
    if (galleryElement) {
      observer.observe(galleryElement);
    }

    return () => {
      if (galleryElement) {
        observer.unobserve(galleryElement);
      }
    };
  }, []);

  return (
    <section
      className="gallery"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/Images/5.jfif)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        padding: "24px 16px",
        boxSizing: "border-box",
        overflow: "hidden",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <p
          ref={textRef2}
          style={{
            fontFamily: "KZAmour",
            fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            margin: 0,
            color: "#A0565E",
            lineHeight: "1.6",
            marginBottom: "20px",
          }}
        >
          Құрметті ағайын-туыс, бауырлар, құда-жекжат, нағашы-жиен, бөлелер,
          құрбы құрдас, дос-жарандар, әріптестер, көршілер
        </p>

        <h1
          ref={h1Ref}
          style={{
            fontFamily: "KZAmour",
            fontSize: "clamp(1.2rem, 3vw, 1.4rem)",
            color: "#A0565E",
            margin: 0,
            lineHeight: "1.5",
          }}
        >
          Сіздерді қыздарымыз
          <br />
          Медина мен Милананың
        </h1>
      </div>
      <div>
        <p
          ref={textRef}
          style={{
            fontFamily: "KZAmour",
            fontSize: "clamp(1.2    rem, 2.5vw, 1.5rem)",
            margin: 0,
            color: "#A0565E",
            lineHeight: "1.6",
            marginBottom: "20px",
          }}
        >
          1 жас және тұсау кесер тойына арналған салтанатты ақ дастарханымыздың
          қадірлі қонағы болуға шақырамыз!
        </p>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .gallery {
            padding: 16px 12px !important;
            min-height: 80vh !important;
          }
        }

        @media (max-width: 480px) {
          .gallery {
            padding: 12px 8px !important;
            min-height: 70vh !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Gallery;
