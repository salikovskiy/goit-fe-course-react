import React from "react";

const Publication = ({ title, text }) => (
  <article>
    <h2>{title}</h2>
    <p>{text}</p>
  </article>
);

export default Publication;
