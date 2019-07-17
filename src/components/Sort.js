import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sort() {
  return (
    // Sort name
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Sắp xếp <span className="caret" />
        </button>
        <ul className="dropdown-menu">
          <li>
            <a role="button" href="ccc" className="sort_selected">
              <FontAwesomeIcon icon="sort-alpha-down-alt" />A tới Z
            </a>
          </li>
          <li>
            <a role="button" href="ccc" className="sort_selected">
              <FontAwesomeIcon icon="sort-alpha-down-alt" />Z tới A
            </a>
          </li>
          <li>
            <a href="_blank">Something else here</a>
          </li>
          <li role="separator" className="divider" />
          <li>
            <a href="_blank">Separated link</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sort;
