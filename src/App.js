import React from "react";
import "./App.css";
import Home from "./Page/Home";
import Blog from "./Page/Blog";
import Header from "./Component/Header";
import { Apidata } from "./Contextapi/Apidata";
import Footer from "./Component/Footer";
import Productdetai from "./Page/Productdetai";
import Productfilter from "./Page/Productfilter";
import Searchterm from "./Page/Searchterm";
import Shop from "./Page/Shop";
import Cart from "./Page/Cart";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Apidata>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/:slug" element={<Productfilter />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/search" element={<Searchterm />}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/lien-he" element={<Blog />}></Route>
            <Route path="/product/:title" element={<Productdetai />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </Apidata>
  );
}

export default App;
