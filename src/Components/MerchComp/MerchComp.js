import React from "react";
import "./MerchComp.css";
import clothingData from"../clothingData.js";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import star from "./stars.png";
import Row from "react-bootstrap/Row";
const MerchComp = () => {
  const products = clothingData.map(product => {
    let show;
    let itemRating;
    // if(product.status!=="Available" && product.exclusivity=="Limited Edition"){
    //   show = <div><Button className="aTc" >SOLD OUT</Button></div>
    // }
    // else if(product.status=="Available" && product.exclusivity=="Limited Edition"){
    //   show = <div><Button className="aTc">Limited Edition</Button></div>
    //}
    if(product.status=="SOLD OUT"){
      show = <div><button className="aTc button"><strong>Out of Stock</strong></button></div>
    }else{
      show = <div><button className="aTc button"><strong>Add to Cart</strong></button></div>
    }
    if(product.rating=="5"){
      itemRating = <Row className="ratingRow"><img src={star} alt="star" className="star"/><img src={star} alt="star" className="star"/><img src={star} alt="star" className="star"/><img src={star} alt="star" className="star"/><img src={star} alt="star" className="star"/></Row>
    }else if(product.rating=="4"){
      itemRating = <Row className="ratingRow"><img src={star} alt="star" className="star"/><img src={star} alt="star" className="star"/><img src={star} alt="star" className="star"/><img src={star} alt="star" className="star"/></Row>
    }else if(product.rating=="3"){
      itemRating = <Row className="ratingRow"><img src={star} alt="star" className="star"/><img src={star} alt="star" className="star"/><img src={star} alt="star" className="star"/></Row>
    }
    return(
      <Link to={`/Merch/${product.id}`}>
      <Card style={{ width: "18rem",marginBottom:"10px"}} className="square border border-0">
      <div key={product.id}>
        <div className="itemBackgroundColor">
          <Card.Img variant="top" src={product.image}/>
        </div>
        <Card.Body>
             <Card.Title style={{display:"inline",color:"black"}}>{product.title} <sup>$</sup>{product.text}<sup>.00</sup></Card.Title>
              <Card.Text>{itemRating}</Card.Text>
             <Card.Text className="limitedButton col text-center">{show}</Card.Text>
           </Card.Body>
      </div>
      </Card>
      </Link> 
    )
  })
  return (
    <>
      <div className="grid">
        {products}
      </div>
      
    </>
  );
}
export default MerchComp;