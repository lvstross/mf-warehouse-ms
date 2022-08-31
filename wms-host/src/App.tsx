import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Dashboard from './components/Dashboard';
import Customers from 'customers/Customers';
import Departments from 'departments/Departments';
import Inventory from 'inventory/Inventory';
import Invoices from 'invoices/Invoices';
import Products from 'products/Products';
import PurchaseOrders from 'purchaseorders/PurchaseOrders';
import Purchases from 'purchases/Purchases';
import Routers from 'routers/Routers';
import Vendors from 'vendors/Vendors';
import "./index.scss";

const App = () => (
  <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/products" element={<Products />} />
        <Route path="/purchaseorders" element={<PurchaseOrders />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/routers" element={<Routers />} />
        <Route path="/vendors" element={<Vendors />} />
        {/* <Route path="*" element={<Pages.NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
