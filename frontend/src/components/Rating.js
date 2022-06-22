import React from "react";

function Rating({ value, text, color }) {
  /* Create an array of stars */
  let stars = [];
  let maxStars = 5;

  for (let star = 0; star < maxStars; star++) {
    // If the star is a full star
    if (value - star >= 1) {
      stars.push(<i style={{ color }} className="fas fa-star"></i>);
    }
    // If the star is a half star
    else if (value - star === 0.5) {
      stars.push(<i style={{ color }} className="fas fa-star-half-alt"></i>);
    }
    // If the star is an empty star
    else if (value - star <= 0) {
      stars.push(<i style={{ color }} className="far fa-star"></i>);
    }
  }

  return (
    <div className="rating">
      <span>{stars}</span>

      <span> {text && text} </span>
    </div>
  );
}

export default Rating;
