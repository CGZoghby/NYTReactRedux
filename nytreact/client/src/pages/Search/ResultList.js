import React from "react";

const ResultList = props => (
  <ul className="list-group">
    {props.results.map(result => (
      <li className="list-group-item" key={result.id}>
        <a href={result.web_url}>{result.headline}</a> Published On: {result.pub_date}
      </li>
    ))}
  </ul>
);

export default ResultList;
