import React from "react";

function Address() {
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
        color: "#fff",
        textShadow: "0 2px 8px #000",
        padding: "24px 8px",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Party Address</h2>
      <p
        style={{
          fontSize: "1.1rem",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        123 Baby Street, Happy Town, Country
      </p>
      <a
        href="https://maps.google.com/?q=123+Baby+Street+Happy+Town"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#fff",
          textDecoration: "underline",
          fontSize: "1.1rem",
        }}
      >
        View on Map
      </a>
    </section>
  );
}

export default Address;
