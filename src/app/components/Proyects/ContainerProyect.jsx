import React from "react";
import CardProyect from "./CardProyect";
import data from "./proyectos.json";

function ContainerProyect() {
  return (
    <div className="flex h-screen w-full flex-col space-y-20">
      {data && data.length > 0
        ? data.map((proyecto) => <CardProyect info={proyecto} />)
        : null}
    </div>
  );
}

export default ContainerProyect;
