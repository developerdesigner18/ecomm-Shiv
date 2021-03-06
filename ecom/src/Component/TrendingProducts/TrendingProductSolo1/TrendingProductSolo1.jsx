import React from "react";
import "./TrendingProductSolo1.css";
import CardContent from "@mui/material/CardContent";
import TP1 from "../TP1.png";
import { Card } from "antd";

function TrendingProductSolo1() {
  return (
    <div className="latestChairFirstHolder">
      <Card
        sx={{
          width: "100px !important",
          marginBottom: "10px",
        }}
      >
        <div style={{ height: "20px", width: "100%" }}></div>

        <img src={TP1} alt="Trndingproducts" />

        <div className="solo1Desc">
          <p className="solo1name">Cantlivevr Chair</p>
          <p className="solo1price">
            $26.00 <strike className="solo1strickedPrice">$42.00</strike>
          </p>
        </div>
      </Card>
    </div>
  );
}

export default TrendingProductSolo1;
