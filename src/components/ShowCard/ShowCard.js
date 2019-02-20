import React from "react";
import "./ShowCard.css";

const ShowCard = props => (
  <div 
  className="card"
  value = {props.id}
 
  onClick={() => props.handleClick(props.id)}
  >
   <div className="content">
  <strong>Name:</strong> {props.title}
  </div>
    <div className="img-container">
      <img alt={props.name} src={props.image} width="250px" height="200px" />
    </div>
  </div>
);

export default ShowCard;
