"use client";
import Image from "next/image";
import React from "react";
import henry from "../../../public/henry-logo.png";

function AboutMe() {
  const handleClick = () => {
    const henryUrl = "https://www.soyhenry.com/";

    window.open(henryUrl, "_blank");
  };

  return (
    <div className="flex h-screen w-full flex-col p-10">
      <div className="flex h-2/4 w-full flex-col justify-evenly">
        <h1 className="text-5xl text-letra underline">About me</h1>
        <p className="text-gris text-4xl font-light">
          My focus is on building robust applications that inspire and simplify
          people's lives. With a continuous learning mindset, I am always
          exploring new technologies. I believe in the importance of
          collaboration and am excited to be part of projects that challenge my
          skills and foster constant growth. Every line of code is an
          opportunity to innovate and enhance the user experience.
        </p>
      </div>
      <div className="flex h-2/4 flex-col items-center justify-evenly ">
        <h1 className="text-5xl text-letra underline">Education</h1>
        <div
          className="flex h-4/6 w-1/6 cursor-pointer flex-col items-center justify-center rounded-xl bg-carta"
          onClick={handleClick}
        >
          <Image
            src={henry}
            width={188}
            height={138}
            alt="henry"
            className="rounded-xl p-4"
          ></Image>
          <h1 className="text-gris text-xl">SoyHenry</h1>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
