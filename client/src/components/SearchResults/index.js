import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(results => (
        <li key={results} className="list-group-item">
          <img alt="Book" src={results} className="img-fluid" />
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
