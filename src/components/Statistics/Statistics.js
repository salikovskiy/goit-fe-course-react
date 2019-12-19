import React from "react";
import Statistic from "../Statistic/Statistic";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <h2>Statistics</h2>
    <Statistic label="Good" value={good} />
    <Statistic label="Neutral" value={neutral} />
    <Statistic label="Bad" value={bad} />
    <p>Total: {total()}</p>
    <p>
      Persantage:
      {positivePercentage()}%
    </p>
  </>
);

export default Statistics;
