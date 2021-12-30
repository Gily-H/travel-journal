import React from "react";
import Details from "./Details";
import "../styles/entry.css";

export default function Entry(props) {
  console.log(props.destination);
  return (
    <>
      <div className="entry-container">
        <img className="location-img" src={`../images/${props.destination.image}`} alt="s" />
        <Details info={props.destination} />
      </div>
      <hr />
    </>
  );
}
