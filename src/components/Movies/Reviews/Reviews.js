import React from "react";

const Reviews = ({ reviews }) =>
  reviews.length !== 0 && (
    <>
      <h4>Reviews</h4>
      {reviews.results.length === 0 ? (
        <p>We don`t have reviews for this movie</p>
      ) : (
        <>
          {reviews.results.map(elem => (
            <>
              <h4>{elem.author}</h4> <p>{elem.content}</p>
            </>
          ))}
        </>
      )}
    </>
  );

export default Reviews;
