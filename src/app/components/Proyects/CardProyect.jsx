"use client";
import React from "react";
import { IoMdLink } from "react-icons/io";
import { IoCodeSlashOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import Link from "next/link";

function CardProyect({ info }) {
  return (
    <div className="flex h-2/5 w-full flex-row space-x-10 rounded-xl bg-carta p-3">
      <div className="flex w-full items-center justify-center p-4 lg:w-3/4 lg:justify-end ">
        <div className="flex flex-col items-start space-y-2 text-start">
          <div className="overflow-hidden lg:pr-4">
            <h1 className="overflow-ellipsis whitespace-nowrap text-2xl text-letra lg:text-5xl">
              {info.title}
            </h1>
            <p className="overflow-ellipsis text-base font-thin text-gris lg:text-2xl">
              {info.description}
            </p>
          </div>
          <div className="h-5/5 flex flex-row justify-start space-x-4 lg:justify-end">
            <IconContext.Provider value={{ color: "#D66853", size: "40px" }}>
              <Link href={info.url}>
                <IoMdLink />
              </Link>
              <Link href={info.code}>
                <IoCodeSlashOutline />
              </Link>
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <div className="hidden w-1/4 justify-end lg:flex">
        <img
          src={info.image}
          alt={info.title}
          className="w-full rounded-xl object-fill"
        />
      </div>
    </div>
  );
}

export default CardProyect;
