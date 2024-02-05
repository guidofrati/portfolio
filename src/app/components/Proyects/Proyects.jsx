import React from "react";
import ContainerProyect from "./ContainerProyect";

export default function Proyects() {
  return (
    // agregar snap-end
    <div className="flex h-screen w-full flex-col p-10">
      <div className="pt-30 flex h-1/5 flex-col items-end p-10">
        <h1 className="text-5xl text-letra underline underline-offset-4">
          Proyects
        </h1>
      </div>
      <ContainerProyect />
    </div>
  );
}
