import Image from "next/image";
import React from "react";
import guido from "../../../public/sesese.png";

function HomePage() {
  return (
    <div className="flex h-screen w-full items-center justify-center text-letra lg:flex lg:flex-col lg:justify-evenly">
      <div className="flex h-1/5 w-2/3 flex-col items-center justify-center lg:flex lg:flex-row lg:justify-evenly">
        <div className="mt-4 flex items-center justify-center lg:mb-0">
          <Image
            src={guido}
            width={0}
            height={0}
            alt="guido"
            className="h-96 w-80 rounded-full border-4 border-black lg:h-[600px] lg:w-[500px]"
          />
        </div>
        <div className="flex flex-col items-center justify-center p-10 text-center">
          <h1 className="text-6xl lg:text-9xl">Guido Fraticelli</h1>
          <h3 className="text-4xl lg:text-6xl">Full-Stack Developer</h3>
          <hr />
          <h6 className="text-xl lg:text-2xl">from Neuquen, Argentina</h6>
          <h6 className="text-xl lg:text-2xl">living in</h6>
          <div className="flex flex-row items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            <h6 className="text-xl lg:text-2xl">Cordoba, Argentina</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
