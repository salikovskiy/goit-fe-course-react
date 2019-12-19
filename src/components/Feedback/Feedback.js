import React, { Component } from "react";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import "./Feedback.css";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countTotalFeedback = () =>
    this.state.bad + this.state.neutral + this.state.good;

  countPositiveFeedbackPercentage = () =>
    (this.state.good /
      (this.state.bad + this.state.neutral + this.state.good)) *
    100;

  render() {
    return (
      <section>
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          options={"good"}
          onLeaveFeedback={() =>
            this.setState({
              good: this.state.good + 1
            })
          }
        />
        <FeedbackOptions
          options={"neutral"}
          onLeaveFeedback={() =>
            this.setState({
              neutral: this.state.neutral + 1
            })
          }
        />
        <FeedbackOptions
          options={"bad"}
          onLeaveFeedback={() =>
            this.setState({
              bad: this.state.bad + 1
            })
          }
        />
        {this.state.good !== 0 ||
        this.state.neutral !== 0 ||
        this.state.bad !== 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        ) : (
          ""
        )}
      </section>
    );
  }
}

export default Feedback;
