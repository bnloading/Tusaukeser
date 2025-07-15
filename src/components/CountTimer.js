import React, { useState, useEffect } from "react";

function CountTimer() {
  const targetDate = new Date("2025-08-01T12:00:00");
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
        color: "#fff",
        textShadow: "0 2px 8px #000",
        padding: "24px 8px",
        boxSizing: "border-box",
      }}
    >
      <h2>Countdown to Birthday</h2>
      <div style={{ fontSize: "1.5rem" }}>
        {days}d {hours}h {minutes}m {seconds}s
      </div>
    </section>
  );
}

export default CountTimer;
