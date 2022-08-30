import React from "react";
import ReactDOM from "react-dom";
import Invoices from "./invoices/Invoices";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Invoices />
    <div>Name: wms-invoices</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
