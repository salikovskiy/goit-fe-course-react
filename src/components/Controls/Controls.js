import React from "react";

const Controls = ({
  onPrevClick,
  onNextClick,
  prevBtnDisabled,
  nextBtnDisabled
}) => (
  <section>
    <button type="button" onClick={onPrevClick} {...prevBtnDisabled}>
      Назад
    </button>
    <button type="button" onClick={onNextClick} {...nextBtnDisabled}>
      Вперед
    </button>
  </section>
);

export default Controls;
