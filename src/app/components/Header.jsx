"use client";
import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IconContext } from "react-icons";
import Link from "next/link";

function Header() {
  return (
    <section className="fixed h-10 w-full p-2">
      <IconContext.Provider value={{ color: "white", size: "40px" }}>
        <div className="inline-flex h-10 w-full items-center justify-end ">
          <div className="flex w-32 items-center justify-center rounded-l-md border-r-2 border-r-letra bg-carta bg-opacity-70">
            <Link href="mailto:guidofraticelli22@gmail.com?subject=Te contacto para:&body=Si preferis contactarme por numero, aca te lo dejo: 2995343513">
              <MdOutlineEmail />
            </Link>
          </div>
          <div className="flex w-32 items-center justify-center border-r-2 border-r-letra bg-carta bg-opacity-70">
            <Link href="https://www.linkedin.com/in/guidofrati/">
              <CiLinkedin />
            </Link>
          </div>
          <div className="flex w-32 items-center justify-center border-r-2 border-r-letra bg-carta bg-opacity-70">
            <Link href="https://github.com/guidofrati">
              <FaGithub />
            </Link>
          </div>
          <div className="flex h-10 w-32 items-center justify-center rounded-r-md bg-carta bg-opacity-70">
            <Link href="https://docs.google.com/document/d/10KjBI5AjXWuJIi_JUtCi4-DKrcIH6As51FG7V__iz0I/edit?usp=sharing">
              <h1 className="rounded-md bg-blanco text-2xl font-medium text-black">
                CV
              </h1>
            </Link>
          </div>
        </div>
      </IconContext.Provider>
    </section>
  );
}

export default Header;
