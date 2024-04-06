"use client";
import Image from "next/image";
import React from "react";
import henry from "../../../public/henry-logo.png";
import ef from "../../../public/ef.png";
import Link from "next/link";

function AboutMe() {
  return (
    <div className="flex h-screen w-full flex-col p-10">
      <div className="flex h-2/4 w-full flex-col justify-center gap-y-2 p-2 text-center lg:items-start lg:justify-evenly">
        <h1 className="text-3xl text-letra underline lg:text-5xl">About me</h1>
        <p className="text-xl font-light text-gris lg:text-start lg:text-4xl">
          My focus is on building robust applications that inspire and simplify
          people's lives. With a continuous learning mindset, I am always
          exploring new technologies. I believe in the importance of
          collaboration and am excited to be part of projects that challenge my
          skills and foster constant growth. Every line of code is an
          opportunity to innovate and enhance the user experience.
        </p>
      </div>
      <div className="flex h-2/4 w-full flex-col items-center lg:justify-evenly ">
        <h1 className="text-3xl text-letra underline lg:text-5xl">Education</h1>
        <div className="flex h-5/6 w-full flex-row items-center justify-center gap-2 lg:space-x-32">
          <div className="flex h-5/6 w-full flex-col items-center justify-center rounded-xl bg-carta p-2 lg:w-1/6">
            <Link href="https://www.soyhenry.com/">
              <Image src={henry} width={188} height={138} alt="henry" />
              <h1 className="text-center text-xl text-gris">SoyHenry</h1>
            </Link>
          </div>
          <div className="flex h-5/6 w-full flex-col items-center justify-center rounded-xl bg-carta p-2 lg:w-1/6">
            <Link href="/first.pdf">
              <Image src={ef} width={188} height={138} alt="EF CERTIFICATE" />
              <h1 className="text-center text-xl text-gris">C1(ADVANDCED)</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
