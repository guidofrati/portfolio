import React from "react";
import data from "./habilities.json";
import HabilitiesCard from "./HabilitiesCard";

function HabilitiesContainer() {
  return (
    <div className="m-4 flex flex-wrap items-center justify-center">
      {data && data.length > 0
        ? data.map((habilities) => <HabilitiesCard info={habilities} />)
        : null}
    </div>
  );
}

export default HabilitiesContainer;
