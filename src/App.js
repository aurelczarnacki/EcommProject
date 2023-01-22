import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import backgroundH from "./assets/background.gif";
import Products from "./components/Products";
import Partnership from "./components/Partnership";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import { CartProvider } from "./cart-context";

const App = () => {
  const [page, setPage] = useState("home");
  const [activeProductId, setActiveProductId] = useState(null);

  const handleProductClick = (id) => {
    if (id === activeProductId) {
      setActiveProductId(null);
    } else {
      setActiveProductId(id);
    }
  };
  return (
    <main
      className="App"
      style={{
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
        overflowY: "hidden",
        background: `url(${backgroundH})`,
        backgroundSize: "cover",
      }}
    >
      <CartProvider>
        <NavBar setPage={setPage} />
        <div className="rowC">
          {page === "home" ? (
            <Products
              activeProductId={activeProductId}
              onProductClick={handleProductClick}
            />
          ) : (
            ""
          )}
          {page === "contact" ? <Contact /> : ""}
          {page === "partnership" ? <Partnership /> : ""}
          {page === "cart" ? <Cart /> : ""}
        </div>
      </CartProvider>
    </main>
  );
};

export default App;
