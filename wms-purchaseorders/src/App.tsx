import React from "react";
import ReactDOM from "react-dom";
import PurchaseOrders from "./purchaseorders/PurchaseOrders";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <PurchaseOrders />
    <div>Name: wms-purchaseorders</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
