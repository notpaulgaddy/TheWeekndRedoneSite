import React from "react";
import "./MerchComp.css";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const Cards = () => {
  const cardInfo = [
    {image:
        "https://cdn.shopify.com/s/files/1/1429/6260/products/AHTD-TOUR-MERCH-PRODUCT-SHOTS---POSTER-TEE-FRONT_800x.png?v=1663686021",
        title: "AHTD Tour Poster Tee",
        text: "$50.00",
        category: "shirt",
        status:"SOLD OUT",
        exclusivity: "None",
        id:"shirt1"
      },{
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/AHTD-TOUR-MERCH-PRODUCT-SHOTS---TOUR-TEE-FRONT_800x.png?v=1663686212",
        title: "AHTD Tour Tee",
        text: "$50.00",
        category: "shirt",
        status:"Available",
        exclusivity: "None",
        id:"shirt2"
      },{
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/AHTD-TOUR-MERCH-PRODUCT-SHOTS---XOHF-TEE-BACK_880x.png?v=1665085111",
        title: "AHTD Tour XOHF Tee",
        text: "$50.00",
        category: "shirt",
        status:"Available",
        exclusivity: "None",
        id:"shirt3"
      },{
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/XO-CHROME-LOGO-TEE-BLACK_880x.png?v=1651001065",
        title: "DAWN FM Chrome XO Logo Tee",
        text: "$40.00",
        category: "shirt",
        status:"Available",
        exclusivity: "None",
        id:"shirt4"
      },{
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/XO-CHROME-LOGO-TEE-WHITE_880x.png?v=1651001070",
        title: "DAWN FM Logo Tee",
        text: "$50.00",
        category: "shirt",
        status:"Available",
        exclusivity: "None",
        id:"shirt5"
      },
      {
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/blackxoclassic_880x.png?v=1663951164",
        title: "XO Classic Logo Tee",
        text: "$40.00",
        category: "shirt",
        status:"Available",
        exclusivity: "None",
        id:"shirt6"
      },
      {
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/whitexologo_880x.png?v=1663951191",
        title: "XO Classic Logo Tee",
        text: "$40.00",
        category: "shirt",
        status:"Available",
        exclusivity: "None",
        id:"shirt7"
      },
      {
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/DAWNFMPLANETEE_880x.png?v=1642780477",
        title: "DAWN FM Plane Tee",
        text: "$38.00",
        category: "shirt",
        status:"Available",
        exclusivity: "None",
        id:"shirt8"
      },{
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/DFM-COVER-TEE-BLACK-FRONT_880x.png?v=1641073291",
        title: "DAWN FM Cover Tee",
        text: "$40.00",
        category: "shirt",
        status:"Available",
        exclusivity: "None",
        id:"shirt9"
      },
      {
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/DFM-TEE-BLACK-FRONT_880x.png?v=1641073237",
        title: "DAWN FM Tee",
        text: "$38.00",
        category: "shirt",
        status:"Available",
        exclusivity: "None",
        id:"shirt10"
      },{
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/DFM-CHROME-TITLE-TEE-BLACK-FRONT_880x.png?v=1641073307",
        title: "DAWN FM Chrome Title Tee",
        text: "$38.00",
        category: "shirt",
        status:"Available",
        exclusivity: "None",
        id:"shirt11"
      },
      {
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/AHTD-TOUR-MERCH-PRODUCT-SHOTS---POSTER-LS-FRONT_800x.png?v=1663686473",
        title: "AHTD Tour Poster Longsleeve Tee",
        text: "$60.00",
        category: "shirt",
        status:"Available",
        exclusivity: "None",
        id:"s12"
      },{
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/blacktruckerfront_800x.png?v=1663685658",
        title: "AHTD TOUR FOAM TRUCKER Black",
        text: "$35.00",
        category: "hat",
        status:"Available",
        exclusivity: "Limited Edition",
        id:"hat1"
      },{
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/whitetruckerfront_800x.png?v=1663685469",
        title: "AHTD TOUR FOAM TRUCKER White",
        text: "$35.00",
        category: "hat",
        status:"Available",
        exclusivity: "Limited Edition",
        id:"hat2"
      },{
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/Dawn-fm_02_a6c42d96-940d-438f-8713-c692d16a792a_880x.png?v=1663947402",
        title: "AHTD TOUR FM Keychain",
        text: "$30.00",
        category: "keychain",
        status:"Available",
        exclusivity: "Limited Edition",
        id:"keychain1"
      },{
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/XO_02_880x.png?v=1663947333",
        title: "AHTD TOUR KO Keychain",
        text: "$30.00",
        category: "keychain",
        status:"Available",
        exclusivity: "Limited Edition",
        id:"keychain2"
      },{
        image:
          "https://cdn.shopify.com/s/files/1/1429/6260/products/1rect_880x.png?v=1669154014",
        title: "0:00:01",
        text: "$145.00",
        category: "painting",
        status:"SOLD OUT",
        exclusivity: "Limited Edition",
        id:"painting1"
      }
  ];
  const renderCard = (card, index) => {
    // let exclusive;
    let show;
    if(card.status!=="Available" && card.exclusivity=="Limited Edition"){
      show = <div><Button variant="warning" style={{margin: "auto"}}>SOLD OUT</Button></div>
    }else if(card.status=="Available" && card.exclusivity=="Limited Edition"){
      show = <div><Button variant="warning" style={{margin: "auto"}}>Limited Edition</Button></div>
    }else if(card.status=="SOLD OUT" && card.exclusivity=="None"){
      show = <div><Button variant="primary" style={{margin: "auto"}}>SOLD OUT</Button></div>
    }else{
      show = <div><Button style={{margin: "auto",  backgroundColor: "white",border: "none"}}>AVAILABLE</Button></div>
    }
    return (
      <a href=''>
        <Card style={{ width: "18rem",marginBottom:"10px"}} key={index} className="square border border-0">
          <Card.Img
            variant="top"
            src={card.image}
          />
          <Card.Body>
            <Card.Title style={{textAlign: "center"}}>{card.title}</Card.Title>
            <Card.Text style={{textAlign: "center",marginBottom:"20px"}}>{card.text}</Card.Text>
            <Card.Text className="limitedButton col text-center">{show}</Card.Text>
          </Card.Body>
        </Card>
        </a>
    );
  };

  return <div className="grid">{cardInfo.map(renderCard)}</div>;
};

export default Cards;