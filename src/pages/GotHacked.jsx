import React, { useEffect, useState } from "react";
import HackedBg from "./img/signs-that-youve-been-hacked.jpeg"; // use your uploaded image

const GotHacked = () => {
  const [text, setText] = useState("HACKED");
  const [glitch, setGlitch] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const chars = "01▓▒░!@#$%&<>|\\/";
      const glitchy = text
        .split("")
        .map((char) =>
          Math.random() > 0.3
            ? chars[Math.floor(Math.random() * chars.length)]
            : char
        )
        .join("");
      setGlitch(glitchy);
    }, 100);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div
      className="min-h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${HackedBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70 z-0" />

      <h1 className="z-10 text-6xl md:text-8xl font-bold text-red-600 animate-pulse tracking-widest drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]">
        {glitch}
      </h1>

      <p className="z-10 mt-8 text-white opacity-80 font-mono animate-pulse">
        Everything is under our control... 💀
      </p>
    </div>
  );
};

export default GotHacked;
