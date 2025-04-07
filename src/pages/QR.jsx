import React, { useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRPrizeTrap = () => {
  const redirectUrl = "https://juccgamess-git-main-3bdalhameeds-projects.vercel.app/gg";


  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 to-pink-500 flex flex-col items-center justify-center text-center text-white font-bold px-4 relative overflow-hidden">
      {/* Confetti background animation */}
      <div className="absolute inset-0 bg-[url('https://i.gifer.com/7efs.gif')] bg-cover opacity-30 blur-sm z-0" />

      {/* Flashing "YOU WON" Banner */}
      <h1 className="text-4xl md:text-5xl text-yellow-200 animate-bounce drop-shadow z-10">
        🎉 CONGRATULATIONS 🎉
      </h1>

      <p className="text-2xl md:text-3xl mt-4 text-white animate-pulse z-10">
        💵💰💵 FIRST ONE TO SCAN WILL WIN 💵💰💵
      </p>

      <div className="bg-white p-6 rounded-3xl shadow-2xl mt-8 z-10">
        <QRCodeCanvas value={redirectUrl} size={220} level="H" />
      </div>

      <p className="mt-6 text-md md:text-lg text-white z-10 animate-pulse">
        Scan now to claim your reward...
      </p>
    </div>
  );
};

export default QRPrizeTrap;
