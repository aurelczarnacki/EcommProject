import React from "react";
import { Card } from "@material-ui/core";

const Partnership = () => {
  return (
    <Card
      style={{
        width: "50%",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "1em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <h1>Created by</h1>
        <h6>
          Aureliusz Czarnacki
          <br />
          Karol Bączek
        </h6>
      </div>
    </Card>
  );
};
export default Partnership;
