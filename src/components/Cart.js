import React, { useState, useEffect } from "react";
import { useCart } from "../cart-context";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    width: "50%",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "1em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
});

const Cart = () => {
  const classes = useStyles();
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : [];
  });
  const { removeFromCart, handlePurchase } = useCart();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Card className={classes.root}>
      <h1>Your Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={index} className="d-flex align-items-center">
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "50px", marginRight: "1em" }}
              className="img-thumbnail mr-3"
            />
            <span style={{ marginRight: "1em" }}>{item.name}</span>
            <span className="float-right" style={{ marginRight: "1em" }}>
              {item.price}
            </span>
            <button
              className="btn btn-sm btn-danger ml-auto"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="text-center mt-3">
        <button className="btn btn-success" onClick={handlePurchase}>
          Purchase
        </button>
      </div>
    </Card>
  );
};

export default Cart;
