import React from "react";
import { Card } from "react-bootstrap";
import "./Details.css";
import { Button } from "@material-ui/core";

const Details = ({ product, close, showDetails }) => {
  return (
    <Card className={`product-details ${showDetails ? "show" : "hide"}`}>
      <img src={product.image} alt="productimg" style={{ width: 350 }} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <Button variant="contained" onClick={close}>
        Close
      </Button>
    </Card>
  );
};

export default Details;
