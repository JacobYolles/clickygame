import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li className="brand animated lightSpeedIn alignLeft">
        <a href="/clicky-game/">{props.title}</a>
      </li>
      <li id="rw" >{props.correctIncorrect}</li>


      <li className="alignRight">Score - Top: {props.topScore} | Current: {props.score}</li>

    </ul>
  </nav>
);

export default Nav;