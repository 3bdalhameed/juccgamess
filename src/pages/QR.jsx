import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeTrap = () => {
  const redirectUrl = "https://gamejucc.vercel.app/gothacked";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-green-400 font-mono relative overflow-hidden">
      {/* Animated Code Rain */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#0f0_1px,transparent_1px)] bg-[size:10px_10px] opacity-5 animate-pulse" />
        <div className="absolute inset-0 bg-black bg-opacity-70" />
      </div>

      {/* Main Content */}
      <div className="z-10 text-center p-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-pulse text-green-500 drop-shadow">
          SCAN THE CODE... OR BE HACKED 💀
        </h1>

        <div className="bg-white p-6 rounded-xl shadow-xl inline-block">
          <QRCodeCanvas value={redirectUrl} size={256} level="H" />
        </div>

        <p className="mt-6 text-md md:text-lg text-green-300 animate-pulse opacity-80">
          Hackers don’t knock... they inject.
        </p>
      </div>
    </div>
  );
};

export default QRCodeTrap;
