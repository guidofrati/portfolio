"use client";
import React, { useState } from "react";

function HabilitiesCard({ info }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative m-3 flex w-1/4 justify-center overflow-hidden rounded-xl bg-carta p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative ${isHovered ? "blur-sm filter" : ""}`}>
        <img
          src={info.logo}
          alt={info.name}
          className="w-30 h-20 rounded-xl lg:h-40"
        />
      </div>
      {isHovered && (
        <h1 className="-translate-x-2/2 -translate-y-2/2 absolute mt-2 transform rounded-md bg-fondo p-2 text-center text-base text-gris lg:text-2xl">
          {info.name}
        </h1>
      )}
    </div>
  );
}

export default HabilitiesCard;
