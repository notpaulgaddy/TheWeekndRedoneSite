import React from "react";
import styles from "./MerchComp.css";
import { Card } from "react-bootstrap";
import { render } from "@testing-library/react";

const Cards = () => {
  const cardInfo = [
    {
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/AHTD-TOUR-MERCH-PRODUCT-SHOTS---POSTER-TEE-FRONT_800x.png?v=1663686021",
        title: "AHTD Tour Poster Tee",
        text: "$50.00",
        category: "shirt",
        status:"SOLD OUT"
      },
      {
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/AHTD-TOUR-MERCH-PRODUCT-SHOTS---TOUR-TEE-FRONT_800x.png?v=1663686212",
        title: "AHTD Tour Tee",
        text: "$50.00",
        category: "shirt"
      },
      {
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/AHTD-TOUR-MERCH-PRODUCT-SHOTS---XOHF-TEE-BACK_880x.png?v=1665085111",
        title: "AHTD Tour XOHF Tee",
        text: "$50.00",
        category: "shirt"
      },
      {
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/XO-CHROME-LOGO-TEE-BLACK_880x.png?v=1651001065",
        title: "DAWN FM Chrome XO Logo Tee",
        text: "$40.00",
        category: "shirt"
      },{
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/XO-CHROME-LOGO-TEE-WHITE_880x.png?v=1651001070",
        title: "DAWN FM Logo Tee",
        text: "$50.00",
        category: "shirt"
      },
      {
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/blackxoclassic_880x.png?v=1663951164",
        title: "XO Classic Logo Tee",
        text: "$40.00",
        category: "shirt"
      },
      {
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/whitexologo_880x.png?v=1663951191",
        title: "XO Classic Logo Tee",
        text: "$40.00",
        category: "shirt"
      },
      {
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/DAWNFMPLANETEE_880x.png?v=1642780477",
        title: "DAWN FM Plane Tee",
        text: "$38.00",
        category: "shirt"
      },{
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/DFM-COVER-TEE-BLACK-FRONT_880x.png?v=1641073291",
        title: "DAWN FM Cover Tee",
        text: "$40.00",
        category: "shirt"
      },
      {
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/DFM-TEE-BLACK-FRONT_880x.png?v=1641073237",
        title: "DAWN FM Tee",
        text: "$38.00",
        category: "shirt"
      },{
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/DFM-CHROME-TITLE-TEE-BLACK-FRONT_880x.png?v=1641073307",
        title: "DAWN FM Chrome Title Tee",
        text: "$38.00",
        category: "shirt"
      },
      {
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/AHTD-TOUR-MERCH-PRODUCT-SHOTS---POSTER-LS-FRONT_800x.png?v=1663686473",
        title: "AHTD Tour Poster Longsleeve Tee",
        text: "$60.00",
        category: "shirt"
      }
  ];
  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img
          variant="top"
          src={card.image}
        />
        <Card.Body>
          <Card.Title style={{textAlign: "center"}}>{card.title}</Card.Title>
          <Card.Text style={{textAlign: "center"}}>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid">{cardInfo.map(renderCard)}</div>;
};

export default Cards;