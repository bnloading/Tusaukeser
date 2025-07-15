import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Music } from "lucide-react";

function MusicPlayer(props) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  // Set initial time when component mounts
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 21;
    }
  }, []);

  // Handle audio loading
  const handleCanPlay = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 21;
    }
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
      } else {
        audioRef.current.currentTime = 21; // Reset to 21 seconds when playing
        audioRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  return (
    <div
      style={{
        position: props.style?.position || "fixed",
        top: props.style?.top || "20px",
        right: props.style?.right || "20px",
        left: props.style?.left || "auto",
        transform: props.style?.transform || "none",
        zIndex: props.style?.zIndex || 1000,
        background: "transparent",
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "auto",
        padding: 0,
      }}
    >
      <button
        onClick={handlePlayPause}
        style={{
          background: playing
            ? "linear-gradient(135deg, #ff6b9d, #ff8fab)"
            : "linear-gradient(135deg, #ffb6c1, #ff8fab)",
          border: "none",
          borderRadius: "50%",
          width: "56px",
          height: "56px",
          cursor: "pointer",
          boxShadow: playing
            ? "0 4px 20px rgba(255, 107, 157, 0.4)"
            : "0 4px 15px rgba(248, 187, 208, 0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease",
          transform: playing ? "scale(1.05)" : "scale(1)",
        }}
        aria-label={playing ? "Pause music" : "Play music"}
        onMouseEnter={(e) => {
          e.target.style.transform = playing ? "scale(1.1)" : "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = playing ? "scale(1.05)" : "scale(1)";
        }}
      >
        {playing ? (
          <Pause
            size={24}
            color="#fff"
            fill="#fff"
            style={{
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
            }}
          />
        ) : (
          <Play
            size={24}
            color="#fff"
            fill="#fff"
            style={{
              marginLeft: "2px",
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
            }}
          />
        )}
      </button>

      {/* Music indicator */}
      {playing && (
        <div
          style={{
            position: "absolute",
            top: "-10px",
            right: "-8px",
            background: "#ff6b9d",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "pulse 2s infinite",
          }}
        >
          <Music size={12} color="#fff" />
        </div>
      )}

      <audio
        ref={audioRef}
        src={process.env.PUBLIC_URL + "/music/music.mp3"}
        onCanPlay={handleCanPlay}
      />

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}

export default MusicPlayer;
