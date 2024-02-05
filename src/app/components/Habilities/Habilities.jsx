import React from "react";
import HabilitiesContainer from "./HabilitiesContainer";

function Habilities() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center space-y-10 p-10">
      <div className="mt-10 flex flex-col">
        <h1 className="text-5xl text-letra underline underline-offset-4">
          Habilities
        </h1>
      </div>
      <HabilitiesContainer />
    </div>
  );
}

export default Habilities;
