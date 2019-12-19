import React from "react";

const FeedbackOptions = props => (
  <button onClick={props.onLeaveFeedback}>{props.options}</button>
);
export default FeedbackOptions;
