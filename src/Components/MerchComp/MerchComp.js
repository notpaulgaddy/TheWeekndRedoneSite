import React from "react";
import "./MerchComp.css";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
const Cards = () => {
  const cardInfo = [
    {
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/AHTD-TOUR-MERCH-PRODUCT-SHOTS---POSTER-TEE-FRONT_800x.png?v=1663686021",
        title: "AHTD Tour Poster Tee",
        text: "$50.00",
        category: "shirt",
        status:"SOLD OUT",
        exclusivity: "None"
      },
      {
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/AHTD-TOUR-MERCH-PRODUCT-SHOTS---TOUR-TEE-FRONT_800x.png?v=1663686212",
        title: "AHTD Tour Tee",
        text: "$50.00",
        category: "shirt",
        status:"Available",
        exclusivity: "None"
      },
      {
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/AHTD-TOUR-MERCH-PRODUCT-SHOTS---XOHF-TEE-BACK_880x.png?v=1665085111",
        title: "AHTD Tour XOHF Tee",
        text: "$50.00",
        category: "shirt",
        status:"Available",
        exclusivity: "None"
      },
      {
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/XO-CHROME-LOGO-TEE-BLACK_880x.png?v=1651001065",
        title: "DAWN FM Chrome XO Logo Tee",
        text: "$40.00",
        category: "shirt",
        status:"Available",
        exclusivity: "None"
      },{
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/XO-CHROME-LOGO-TEE-WHITE_880x.png?v=1651001070",
        title: "DAWN FM Logo Tee",
        text: "$50.00",
        category: "shirt",
        status:"Available",
        exclusivity: "None"
      },
      {
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/blackxoclassic_880x.png?v=1663951164",
        title: "XO Classic Logo Tee",
        text: "$40.00",
        category: "shirt",
        status:"Available",
        exclusivity: "None"
      },
      {
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/whitexologo_880x.png?v=1663951191",
        title: "XO Classic Logo Tee",
        text: "$40.00",
        category: "shirt",
        status:"Available",
        exclusivity: "None"
      },
      {
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/DAWNFMPLANETEE_880x.png?v=1642780477",
        title: "DAWN FM Plane Tee",
        text: "$38.00",
        category: "shirt",
        status:"Available",
        exclusivity: "None"
      },{
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/DFM-COVER-TEE-BLACK-FRONT_880x.png?v=1641073291",
        title: "DAWN FM Cover Tee",
        text: "$40.00",
        category: "shirt",
        status:"Available",
        exclusivity: "None"
      },
      {
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/DFM-TEE-BLACK-FRONT_880x.png?v=1641073237",
        title: "DAWN FM Tee",
        text: "$38.00",
        category: "shirt",
        status:"Available",
        exclusivity: "None"
      },{
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/DFM-CHROME-TITLE-TEE-BLACK-FRONT_880x.png?v=1641073307",
        title: "DAWN FM Chrome Title Tee",
        text: "$38.00",
        category: "shirt",
        status:"Available",
        exclusivity: "None"
      },
      {
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/AHTD-TOUR-MERCH-PRODUCT-SHOTS---POSTER-LS-FRONT_800x.png?v=1663686473",
        title: "AHTD Tour Poster Longsleeve Tee",
        text: "$60.00",
        category: "shirt",
        status:"Available",
        exclusivity: "None"
      },{
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/blacktruckerfront_800x.png?v=1663685658",
        title: "AHTD TOUR FOAM TRUCKER Black",
        text: "$35.00",
        category: "hat",
        status:"Available",
        exclusivity: "Limited Edition"
      },{
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/whitetruckerfront_800x.png?v=1663685469",
        title: "AHTD TOUR FOAM TRUCKER White",
        text: "$35.00",
        category: "hat",
        status:"Available",
        exclusivity: "Limited Edition"
      },{
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/Dawn-fm_02_a6c42d96-940d-438f-8713-c692d16a792a_880x.png?v=1663947402",
        title: "AHTD TOUR FM Keychain",
        text: "$30.00",
        category: "keychain",
        status:"Available",
        exclusivity: "Limited Edition"
      },{
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/XO_02_880x.png?v=1663947333",
        title: "AHTD TOUR KO Keychain",
        text: "$30.00",
        category: "keychain",
        status:"Available",
        exclusivity: "Limited Edition"
      },{
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/1rect_880x.png?v=1669154014",
        title: "0:00:01",
        text: "$145.00",
        category: "painting",
        status:"Available",
        exclusivity: "Limited Edition"
      }
  ];
  const renderCard = (card, index) => {
    let exclusive;
    let status;
    if(card.exclusivity == "Limited Edition"){
      exclusive = <div><Button style={{margin: "auto"}} variant="warning">Limited Edition</Button></div>
    }
    if(card.status=="SOLD OUT"){
      status = <div><Button style={{margin: "auto"}} variant="primary">SOLD OUT</Button></div>
    }else{
      status = <div><Button style={{margin: "auto"}} >Available</Button></div>
    }
    return (
      <Card style={{ width: "18rem",marginBottom:"10px"}} key={index} className="square border border-0">
        <Card.Img
          variant="top"
          src={card.image}
        />
        <Card.Body>
          <Card.Title style={{textAlign: "center"}}>{card.title}</Card.Title>
          <Card.Text style={{textAlign: "center"}}>{card.text}</Card.Text>
          <Card.Text className="limitedButton col text-center">{exclusive}</Card.Text>
          <Card.Text className="limitedButton col text-center">{status}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid">{cardInfo.map(renderCard)}</div>;
};

export default Cards;