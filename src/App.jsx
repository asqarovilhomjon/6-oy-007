import "./app.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Product from "./Components/Product/Product";
import Category from "./Components/Category/Category";
import { useState } from "react";

export function App() {
  return (
    <>
      <Header />
      <Category />
      <Product />
      <Footer />
    </>
  );
}

export default App;
