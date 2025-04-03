import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Index";
import "./assets/styles/Layout.css";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
