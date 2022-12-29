import React from "react";
import "./Merch.css";
import Button from "react-bootstrap/Button";
import MerchComp from "../MerchComp/MerchComp";
import NavbarLink from "../NavbarLink/NavbarLink";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ArrowDown, CheckLg } from "react-bootstrap-icons";
import model from "./model.png";
import Jack from "./jack.png"
import Form from "react-bootstrap/Form";
import Dua from "./dua.png";
import Abel from "./abel.png";
class Merch extends React.Component {
  render() {
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
                <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" className="emailBox"/>
                        <Button><CheckLg/></Button>
                    </Form.Group>
                </Row>
              </Col>
              <Col>
                <img src={model} className="modelImg" />
              </Col>
            </Row>
          </div>
          <Row style={{margin:"auto"}}>
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
              <Col>
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
              <Col>
                <Button className="filterToggle">
                  All Filters
                  <ArrowDown />
                </Button>
              </Col>
            </Row>
          </div>

          <MerchComp />
        </div>
      </div>
    );
  }
}

export default Merch;
