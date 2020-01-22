import React from "react";

const Cast = ({ actors }) =>
  actors.length !== 0 && (
    <>
      {actors.cast.map((elem, index) => {
        if (index < 5) {
          return <p>{elem.name}</p>;
        }
      })}
    </>
  );

export default Cast;
