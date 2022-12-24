import React from "react";
import "./MerchComp.css";
import clothingData from"../clothingData.js";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const MerchComp = () => {
  const products = clothingData.map(product => {
    let show;
    if(product.status!=="Available" && product.exclusivity=="Limited Edition"){
      show = <div><Button variant="warning" style={{margin: "auto"}}>SOLD OUT</Button></div>
    }else if(product.status=="Available" && product.exclusivity=="Limited Edition"){
      show = <div><Button variant="warning" style={{margin: "auto"}}>Limited Edition</Button></div>
    }else if(product.status=="SOLD OUT" && product.exclusivity=="None"){
      show = <div><Button variant="primary" style={{margin: "auto"}}>SOLD OUT</Button></div>
    }else{
      show = <div><Button style={{margin: "auto",  backgroundColor: "white",border: "none"}}>AVAILABLE</Button></div>
    }
    return(
      <Link to={`/Merch/${product.id}`}>
      <Card style={{ width: "18rem",marginBottom:"10px"}} className="square border border-0">
      <div key={product.id}>
        <Card.Img variant="top" src={product.image}/>
        <Card.Img/>
        <Card.Body>
             <Card.Title style={{textAlign: "center"}}>{product.title}</Card.Title>
             <Card.Text style={{textAlign: "center",marginBottom:"20px"}}>{product.text}</Card.Text>
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