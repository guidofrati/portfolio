import Image from "next/image";
import React from "react";
import guido from "../../../public/sesese.png";

function HomePage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center text-letra">
      <div className="flex h-1/5 flex-row items-center justify-between">
        <div className="items-center">
          <Image
            src={guido}
            width={400}
            height={500}
            alt="guido"
            className="rounded-full border-4 border-black"
          />
        </div>
        <div className="flex flex-col items-center p-10">
          <h1 className="text-9xl">Guido Fraticelli</h1>
          <h3 className="text-6xl">Full-Stack Developer</h3>
          <hr />
          <h6 className="text-2xl">from Neuquen, Argentina</h6>
          <h6 className="text-2xl">living in</h6>
          <h6 className="text-2xl">Cordoba, Argentina</h6>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
