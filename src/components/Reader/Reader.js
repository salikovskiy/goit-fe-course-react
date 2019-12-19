import React, { Component } from "react";
import Controls from "../Controls/Controls";
import Progress from "../Progress/Progress";
import Publication from "../Publication/Publication";

class Reader extends Component {
  items = this.props.items;

  state = {
    publicationIndex: 0
  };

  onPrevClick = () =>
    this.setState({ publicationIndex: this.state.publicationIndex - 1 });

  onNextClick = () =>
    this.setState({ publicationIndex: this.state.publicationIndex + 1 });

  render() {
    const disabledPrev = this.state.publicationIndex === 0 ? "disabled" : "";
    const disabledNext =
      this.state.publicationIndex === this.items.length ? "disabled" : "";

    const publication = this.items[this.state.publicationIndex];
    return (
      <>
        <Controls
          onPrevClick={this.onPrevClick}
          onNextClick={this.onNextClick}
          prevBtnDisabled={disabledPrev}
          nextBtnDisabled={disabledNext}
        />
        <Progress
          currentPage={this.state.publicationIndex + 1}
          totalPages={this.items.length}
        />
        <Publication title={publication.title} text={publication.text} />
      </>
    );
  }
}

export default Reader;
