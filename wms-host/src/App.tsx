import React from "react";
import ReactDOM from "react-dom";
import Customers from "customers/Customers";
import Departments from "departments/Departments";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Customers />
    <Departments />
    <div>Name: wms-host</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
