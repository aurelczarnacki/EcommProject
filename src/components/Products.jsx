import React from "react";
import { Grid } from "@material-ui/core";
import logo2 from "../assets/logo2.gif";
import check from "../assets/check.gif";
import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Hoodie   ",
    description: "Very comfy",
    price: "$280",
    image:
      "https://cdn-images.farfetch-contents.com/18/02/57/49/18025749_39820818_1000.jpg",
  },
  {
    id: 2,
    name: "Hoodie 2",
    description: "Very comfy too",
    price: "$250",
    image:
      "https://misbhv.com/media/catalog/product/cache/db7c8243ad48af652d1681a9999aa755/f/i/fix-021m161_2001-polizei-hoodie-black_1.jpg",
  },
  {
    id: 3,
    name: "Hoodie 3",
    description: "Comfy",
    price: "$300",
    image:
      "https://cdn-images.farfetch-contents.com/18/02/57/49/18025749_39820818_1000.jpg",
  },
  {
    id: 4,
    name: "Hoodie 4",
    description: "Pretty comfy",
    price: "$200",
    image:
      "https://misbhv.com/media/catalog/product/cache/db7c8243ad48af652d1681a9999aa755/f/i/fix-021m161_2001-polizei-hoodie-black_1.jpg",
  },
  {
    id: 5,
    name: "Hoodie 5",
    description: "Ultimate comfy",
    price: "$350",
    image:
      "https://cdn-images.farfetch-contents.com/18/02/57/49/18025749_39820818_1000.jpg",
  },
  {
    id: 6,
    name: "Hoodie 6",
    description: "Just comfy",
    price: "$250",
    image:
      "https://misbhv.com/media/catalog/product/cache/db7c8243ad48af652d1681a9999aa755/f/i/fix-021m161_2001-polizei-hoodie-black_1.jpg",
  },
];

const Products = () => {
  return (
    <>
      <div
        className="grid"
        style={{
          width: "75%",
          marginLeft: "20px",
          marginTop: "80px",
        }}
      >
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div className="sticky">
        <img
          className="logo2"
          src={logo2}
          alt="logo2"
          style={{
            width: "350px",
          }}
        />
      </div>

      <div className="sticky2">
        <img
          className="check"
          src={check}
          alt="check"
          style={{
            width: "350px",
          }}
        />
      </div>
    </>
  );
};

export default Products;
