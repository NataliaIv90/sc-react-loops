import React from "react";

export default function Countries(props) {
  return (
    <div className="Countries">
      <ul>
        {props.countriesArray.map((country, index) => {
          return <li key={index}>{country}</li>;
        })}
      </ul>
    </div>
  );
}
