import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search() {
  return (
    // Search input
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          name="keyword"
          placeholder="Searching..."
        />
        <span className="input-group-btn">
          <button type="button" className="btn btn-primary">
            <FontAwesomeIcon icon="search" />
            Tìm
          </button>
        </span>
      </div>
    </div>
  );
}

export default Search;
