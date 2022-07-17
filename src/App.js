import React, { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MagicItems from "./pages/MagicItems";
import ItemInfo from "./pages/ItemInfo";
import { magicItems } from "./data.js";
import Cart from "./pages/Cart";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(magicItem) {
    setCart([...cart, { ...magicItem, quantity: 1 }]);
  }

  function changeQuantity(magicItem, quantity) {
    setCart(
      cart.map((item) =>
        item.id === magicItem.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item
      )
    );
  }

  function removeItem(id) {
    setCart((prevSetCart) =>
      prevSetCart.filter((magicItem) => +magicItem.id !== +id)
    );
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += item.quantity;
    });
    return counter;
  }

  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <Nav numberOfItems={numberOfItems()} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/magicItems"
              element={<MagicItems magicItems={magicItems} />}
            />
            <Route
              path="/ItemInfo/:id"
              element={
                <ItemInfo
                  magicItems={magicItems}
                  addToCart={addToCart}
                  cart={cart}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  changeQuantity={changeQuantity}
                  removeItem={removeItem}
                />
              }
            />
          </Routes>
        </div>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
