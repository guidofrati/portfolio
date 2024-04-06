import React from "react";
import ContainerProyect from "./ContainerProyect";

export default function Proyects() {
  return (
    // agregar snap-end
    <div className="flex h-screen w-full flex-col items-center p-10 text-center lg:items-end">
      <div className="pt-30 flex h-1/5 flex-col items-end p-10 ">
        <h1 className=" text-3xl text-letra underline underline-offset-4 lg:text-5xl">
          Proyects
        </h1>
      </div>
      <ContainerProyect />
    </div>
  );
}
