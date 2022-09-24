import React from "react";

export default function NewCountries(props) {
  return (
    <div>
      <ul>
        {props.list.map((country, index) => {
          return (
            <li key={index}>
              {country.capital} is the capital of {country.name} ✔
            </li>
          );
        })}
      </ul>
    </div>
  );
}
