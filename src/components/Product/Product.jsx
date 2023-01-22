import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import Details from "./Details";
import { useCart } from "../../cart-context.js";

const Product = ({ product }) => {
  const classes = useStyles();
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const { addToCart } = useCart();

  const handleProductClick = () => {
    console.log(product.name);
    if (showDetails) {
      setShowDetails(false);
    }
    setSelectedProduct(product);
    setShowDetails(true);
  };

  const handleAddToCart = () => {
    console.log("dodano do koszyka " + product.name);
    addToCart(product);
  };

  return (
    <>
      <Card className={classes.root}>
        <div onClick={handleProductClick}>
          <CardMedia
            className={classes.media}
            image={product.image}
            title={product.name}
          />
          <CardContent>
            <div className={classes.cardContent}>
              <Typography variant="h5" gutterBottom>
                {product.name}
              </Typography>
              <Typography variant="h5">{product.price}</Typography>
            </div>
            <Typography variant="body2" color="textSecondary">
              {product.description}
            </Typography>
          </CardContent>
        </div>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
      {showDetails && (
        <Details
          product={selectedProduct}
          showDetails={showDetails}
          close={() => setShowDetails(false)}
        />
      )}
    </>
  );
};

export default Product;
