import React, { useState, useEffect } from "react";

function CountTimer() {
  const targetDate = new Date("2025-07-22T12:00:00");
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(targetDate - new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const getTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getTime(timeLeft);

  return (
    <section
      className="countdown"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/Images/5.jfif)`,
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
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0)",
          borderRadius: "30px",
          padding: "32px",
          boxShadow: "0 8px 32px rgba(255, 182, 193, 0.3)",
          textAlign: "center",
          maxWidth: "600px",
          width: "90%",
        }}
      >
        <h2
          style={{
            color: "#FF8FAB",
            fontFamily: "KZAmour, sans-serif",
            fontSize: "2.2rem",
            marginBottom: "30px",
            textShadow: "2px 2px 4px rgba(255, 182, 193, 0.3)",
          }}
        >
          Туған күнге дейін
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: days, label: "күн" },
            { value: hours, label: "сағат" },
            { value: minutes, label: "минут" },
            { value: seconds, label: "секунд" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: "#FFF0F5",
                borderRadius: "20px",
                padding: "15px",
                minWidth: "100px",
                boxShadow: "0 4px 15px rgba(255, 182, 193, 0.2)",
                border: "2px solid #FFB6C1",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#FF8FAB",
                  marginBottom: "5px",
                }}
              >
                {item.value}
              </div>
              <div
                style={{
                  fontSize: "1rem",
                  color: "#FF8FAB",
                  fontFamily: "KZAmour, sans-serif",
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "30px",
            fontSize: "1.2rem",
            color: "#FF8FAB",
            fontFamily: "KZAmour, sans-serif",
          }}
        >
          Медина мен Милананың туған күніне
        </div>
      </div>
    </section>
  );
}

export default CountTimer;
