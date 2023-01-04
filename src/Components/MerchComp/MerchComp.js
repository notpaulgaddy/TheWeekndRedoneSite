import React from "react";
import "./MerchComp.css";
import clothingData from "../clothingData.js";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import star from "./stars.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavbarLink from "../NavbarLink/NavbarLink";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { ArrowDown, CheckLg } from "react-bootstrap-icons";
import model from "./model.png";
import Jack from "./jack.png"
import Form from "react-bootstrap/Form";
import Dua from "./dua.png";
import Abel from "./abel.png";
const MerchComp = () => {
  const products = clothingData.map((product) => {
    let show;
    let itemRating;
    if (product.status == "SOLD OUT") {
      show = (
        <div>
          <button className="aTc button">
            <strong>Out of Stock</strong>
          </button>
        </div>
      );
    } else {
      show = (
        <div>
          <button className="aTc button">
            <strong>Add to Cart</strong>
          </button>
        </div>
      );
    }
    if (product.rating == "5") {
      itemRating = (
        <div className="ratingRow">
          <img src={star} alt="star" className="star" />
          <img src={star} alt="star" className="star" />
          <img src={star} alt="star" className="star" />
          <img src={star} alt="star" className="star" />
          <img src={star} alt="star" className="star" />
        </div>
      );
    } else if (product.rating == "4") {
      itemRating = (
        <div className="ratingRow">
          <img src={star} alt="star" className="star" />
          <img src={star} alt="star" className="star" />
          <img src={star} alt="star" className="star" />
          <img src={star} alt="star" className="star" />
        </div>
      );
    } else if (product.rating == "3") {
      itemRating = (
        <div className="ratingRow">
          <img src={star} alt="star" className="star" />
          <img src={star} alt="star" className="star" />
          <img src={star} alt="star" className="star" />
        </div>
      );
    }
    return (
      <div style={{ marginTop: "80px" }}>
        <Link to={`/Merch/${product.id}`}>
          <Card
            style={{ width: "18rem", marginBottom: "10px" }}
            className="square border border-0"
          >
            <div key={product.id}>
              <div className="itemBackgroundColor">
                <Card.Img variant="top" src={product.image} />
              </div>
              <Card.Body>
                <Card.Title style={{ display: "inline", color: "black" }}>
                  {product.title} <sup>$</sup>
                  <strong>{product.text}</strong>
                  <sup>.00</sup>
                </Card.Title>
                <Row>
        <Col>{itemRating}</Col>
        <Col><h2 className="ratingAmt">({product.ratingAmt})</h2></Col>
      </Row>
                {/* <Row>
                  <Card.Text
                    className="ratingRow"
                    style={{ marginTop: "20px", marginBottom: "20px" }}
                  >
                    {itemRating}
                  </Card.Text>

                  <Col>
                    <h2 className="ratingNum">({product.ratingAmt})</h2>
                  </Col>
                </Row> */}
                <Card.Text className="limitedButton col text-center">
                  {show}
                </Card.Text>
              </Card.Body>
            </div>
          </Card>
        </Link>
      </div>
    );
  });
  return (
    <div>
      <NavbarLink />
      <div class="containerBox">
          <div className="emailListDiv">
            <Row>
              <Col>
                <Row>
                  <h2 className="emailListText">
                    Recieve a 5% Off Coupon
                    <br />
                    Upon Joining Our Email
                    <br />
                    List
                  </h2>
                </Row>
                <Row>
                    <Col>   
                        <Form.Control type="email" placeholder="Enter email" className="emailBox"/>
                    </Col>
                    <Col>
                        <Button className="checkButton"><CheckLg/></Button>
                    </Col>
                </Row>
              </Col>
              <Col>
                <img src={model} className="modelImg" />
              </Col>
            </Row>
          </div>
          <Row className="threeDivs">
            <Col>
              <div className="box1">
                <img src={Jack} className="jackImg" />
              </div>
            </Col>
            <Col><div className="box2">
                    <img src={Dua} className="duaImg" />
                </div></Col>
            <Col><div className="box3">
                    <img src={Abel} className="abelImg" />
                </div></Col>
          </Row>
          <div className="topG">
            <Row>
              <Col className="filterCol buttonCol">
                <Button className="filterToggle">
                  All Filters
                  <ArrowDown />
                </Button>
              </Col>
              <Col className="sortCol buttonCol">
                <DropdownButton id="dropdown-basic-button" title="Sort By">
                  <Dropdown.Item href="#/action-1">
                    Price: Lowest - Highest
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Price: Highest - Lowest
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Sold Out</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Available</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Limited Edition
                  </Dropdown.Item>
                </DropdownButton>{" "}
              </Col>
            </Row>
          </div>
          
          {/* <MerchComp/> */}
        </div>
      <div className="grid">{products}</div>
    </div>
  );
};
export default MerchComp;