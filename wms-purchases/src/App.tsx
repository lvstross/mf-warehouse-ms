import React from "react";
import ReactDOM from "react-dom";
import Purchases from "./purchases/Purchases";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Purchases />
    <div>Name: wms-purchases</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
