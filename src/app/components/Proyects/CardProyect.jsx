"use client";
import React from "react";
import { IoMdLink } from "react-icons/io";
import { IoCodeSlashOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import Link from "next/link";

function CardProyect({ info }) {
  return (
    <div className="flex h-2/5 w-full flex-row space-x-10 rounded-xl bg-carta p-3">
      <div className="flex w-3/4 justify-end p-4">
        <div className="flex  flex-col items-end space-y-2">
          <h1 className="text-5xl text-letra">{info.title}</h1>
          <p className="text-2xl font-thin text-gris">{info.description}</p>
          <IconContext.Provider value={{ color: "#D66853", size: "40px" }}>
            <div className="h-5/5 flex flex-row justify-end space-x-4">
              <Link href={info.url}>
                <IoMdLink />
              </Link>
              <Link href={info.code}>
                <IoCodeSlashOutline />
              </Link>
            </div>
          </IconContext.Provider>
        </div>
      </div>
      <div className="flex w-1/4 justify-end">
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
