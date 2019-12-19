import React from "react";

const Progress = ({ currentPage, totalPages }) => (
  <p>
    {currentPage}/{totalPages}
  </p>
);

export default Progress;
