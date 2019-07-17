import React from "react";
import Search from "./Search";
import Sort from "./Sort";

function Control() {
  return (
    // Search input
    <div className="row mt-15">
      {/* Searching */}
      <Search />

      {/* Sort */}
      <Sort />
    </div>
  );
}

export default Control;
