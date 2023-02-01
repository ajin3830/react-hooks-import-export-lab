import React from "react";

// to import a specific variable by name:
import { image } from "../data/user";
// can rename variable inside import statement:
// import { image as newImage} from "../data/user"

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;