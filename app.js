import React from "react";
import ReactDOM from "react-dom";

const Heading = () => {
  return <h1>Hunger Feast</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading/>);
