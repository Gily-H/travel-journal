import React from "react";
import "../styles/details.css";

export default function Details(props) {
  console.log(props.info);
  return (
    <div className="details-container">
      <span className="location">
        <i className="fas fa-map-marker-alt"></i>
      </span>
      <span className="location">{props.info.location}</span>
      <span className="location map-link">
        <a href={props.info.googleMapsUrl}>View on Google Maps</a>
      </span>
      <h1 className="title">{props.info.title}</h1>
      <p className="travel-dates">{props.info.startDate + " - " + props.info.endDate}</p>
      <p className="description">{props.info.description}</p>
    </div>
  );
}
