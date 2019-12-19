import React from "react";
import Feedback from "./Feedback/Feedback";
import Reader from "./Reader/Reader";
import publications from "./Reader/publications.json";

const App = () => (
  <>
    <Feedback />
    <Reader items={publications} />
  </>
);

export default App;
