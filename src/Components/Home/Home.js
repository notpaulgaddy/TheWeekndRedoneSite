import React,{useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { Button } from "react-bootstrap";
import tempHero from "./tempHero.png";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavbarLink from "../NavbarLink/NavbarLink";
import { Gallery } from "react-grid-gallery";
import tooLate from "./tooLate.png";
import picOne from "./pic1.jpg";
import picTwo from "./pic2.jpeg";
const images = [
  {
    src: picOne,
    id: 1,
  },
  {
    src: picTwo,
    id: 2,
  },
  {
    src: "https://www.theweeknd.com/files/2017/08/photo_201708_16_29.jpg",
    id: 3,
  },
  {
    src: "https://www.theweeknd.com/files/2017/06/photo_201706_23_Untitled-25.jpg",
    id: 4,
  },
  {
    src: "https://www.theweeknd.com/files/2017/04/photo_201704_17_XO-5442.JPG",
    id: 5,
  },
  {
    src: "https://www.theweeknd.com/files/2018/01/photo_201801_29_web1.jpg",
    id: 6,
  },
  {
    src: "https://www.theweeknd.com/files/2017/04/photo_201704_17_523541-R1-06-31_.jpg",
    id: 7,
  },
  {
    src: "https://www.theweeknd.com/files/2017/04/photo_201704_17_523874-R1-03-34.jpg",
    id: 8,
  },
  {
    src: "https://www.theweeknd.com/files/2017/04/photo_201704_17_523874-R1-00-37.jpg",
    id: 9,
  },
  {
    src: "https://www.theweeknd.com/files/2017/04/photo_201704_17_18720011.jpg",
    id: 10,
  },
  {
    src: "https://www.theweeknd.com/files/2017/04/photo_201704_17_18710016.jpg",
    id: 11,
  },
  {
    src: "https://www.theweeknd.com/files/2017/04/photo_201704_17_STARBOY-2017-02.jpg",
    id: 12,
  },
  {
    src: "https://www.theweeknd.com/files/2017/04/photo_201704_19_xo-2.JPG",
    id: 13,
  },
  {
    src: "https://www.theweeknd.com/files/2017/04/photo_201704_17_523874-R1-03-34.jpg",
    id: 14,
  },
  {
    src: "https://www.theweeknd.com/files/2017/04/photo_201704_17_523874-R1-00-37.jpg",
    id: 15,
  },
  {
    src: "https://www.theweeknd.com/files/2017/04/photo_201704_17_18720011.jpg",
    id: 16,
  },
  {
    src: "https://www.theweeknd.com/files/2017/04/photo_201704_17_18710016.jpg",
    id: 17,
  },
  {
    src: "https://www.theweeknd.com/files/2017/04/photo_201704_17_STARBOY-2017-02.jpg",
    id: 18,
  },
  {
    src: "https://www.theweeknd.com/files/2017/04/photo_201704_19_xo-2.JPG",
    id: 19,
  },
];
export default function Home() {
      
    return (
      <div>
        <NavbarLink />
        <div id="top">
          <img src={tempHero} alt="Hero" />
        </div>
        <div className="tourPanel">
          <Row>
            <Col>
              <Row className="tourTextStart">
                <h2 className="tourText">AHTD TOUR</h2>
              </Row>
              <Row>
                <Button
                  className="tXvButton"
                  style={{ width: "40%", margin: "auto", marginBottom: "20px" }}
                > 
                 <a href="/Tour">
                    <h3 className="dxvText">TOUR DATES X VENUES</h3>
                  </a>
                </Button>
              </Row>
              <Row>
                <Card className="cardText">
                  <Card.Body>
                    <h2>12 Jan</h2>
                    <h2>NYC</h2>
                    <h2>Terminal 5</h2>
                  </Card.Body>
                  <Card.Body className="black">
                    <h2>12 Jan</h2>
                    <h2>NYC</h2>
                    <h2>Terminal 5</h2>
                  </Card.Body>
                  <Card.Body>
                    <h2>12 Jan</h2>
                    <h2>NYC</h2>
                    <h2>Terminal 5</h2>
                  </Card.Body>
                  <Card.Body className="black">
                    <h2>12 Jan</h2>
                    <h2>NYC</h2>
                    <h2>Terminal 5</h2>
                  </Card.Body>
                  <Card.Body>
                    <h2>12 Jan</h2>
                    <h2>NYC</h2>
                    <h2>Terminal 5</h2>
                  </Card.Body>
                  <Card.Body className="black">
                    <h2>12 Jan</h2>
                    <h2>NYC</h2>
                    <h2>Terminal 5</h2>
                  </Card.Body>
                </Card>
              </Row>
            </Col>
            <Col>
              <img className="tooLatePic" src={tooLate} />
            </Col>
          </Row>
        </div>
        <div className="socials">
            <Row>
              <h2 className="number">123-456-7890</h2>
            </Row>
            
        </div>
          <section class="featured-shop">
            <div class="img-text-wrapper">
              <a href="/Merch" className="wearText">
                <h2 style={{ textAlign: "center", color: "black" }}>
                  WEAR THE
                  <br />
                  BEST.
                </h2>
              </a>
              {/* <Gallery images={images} style={{ position: "relative" }} /> */}
            </div>
          </section>
          {/* <section class="featured-shop">
    <div class="shop-mb"> 
      <div class="view-header">
        <a href="https://shop.theweeknd.com/?utm_campaign=products&amp;utm_medium=referral&amp;utm_source=theweeknd.com" target="_blank">
          <h2>Visit the official online shop</h2>
        </a>
      </div>
      <div class="view-content">
                    <article class="gallery-photo visible">
              <img src="https://www.theweeknd.com/files/2018/01/photo_201801_29_web10.jpg"/>
            </article>
                      <article class="gallery-photo">
              <img src="https://www.theweeknd.com/files/2017/11/photo_201711_13_000033520004.JPG"/>
            </article>
                      <article class="gallery-photo">
              <img src="https://www.theweeknd.com/files/2017/08/photo_201708_16_29.jpg"/>
            </article>
                      <article class="gallery-photo">
              <img src="https://www.theweeknd.com/files/2017/06/photo_201706_23_Untitled-25.jpg"/>
            </article>
                      <article class="gallery-photo">
              <img src="https://www.theweeknd.com/files/2017/05/photo_201705_15_IMG_9757.jpg"/>
            </article>
                      <article class="gallery-photo">
              <img src="https://www.theweeknd.com/files/2017/04/photo_201704_17_XO-5442.JPG"/>
            </article>
                      <article class="gallery-photo">
              <img src="https://www.theweeknd.com/files/2017/04/photo_201704_17_523542-R1-10-27.jpg"/>
            </article>
                      <article class="gallery-photo">
              <img src="https://www.theweeknd.com/files/2018/01/photo_201801_29_web1.jpg"/>
            </article>
                      <article class="gallery-photo">
              <img src="https://www.theweeknd.com/files/2017/04/photo_201704_19_xo-16.JPG"/>
            </article>
                      <article class="gallery-photo">
              <img src="https://www.theweeknd.com/files/2017/12/photo_201712_06_TW-RELEASE003PARTTWO-LOOKBOOK-COVER.jpg"/>
            </article>
                      <article class="gallery-photo">
              <img src="https://www.theweeknd.com/files/2017/12/photo_201712_06_img008.jpg"/>
            </article>
                      <article class="gallery-photo">
              <img src="https://www.theweeknd.com/files/2017/11/photo_201711_13_000029140001.JPG"/>
            </article>
                      <article class="gallery-photo">
              <img src="https://www.theweeknd.com/files/2017/08/photo_201708_16_10.jpg"/>
            </article>
                      <article class="gallery-photo">
              <img src="https://www.theweeknd.com/files/2017/06/photo_201706_23_X4.jpg"/>
            </article>
                      <article class="gallery-photo">
              <img src="https://www.theweeknd.com/files/2017/05/photo_201705_15_IMG_0001.jpg"/>
            </article>
                      <article class="gallery-photo">
              <img src="https://www.theweeknd.com/files/2017/04/photo_201704_19_xo-2.JPG"/>
            </article>
                      <article class="gallery-photo">
              <img src="https://www.theweeknd.com/files/2017/04/photo_201704_17_XO-5127-2.JPG"/>
            </article>
                      <article class="gallery-photo">
              <img src="https://www.theweeknd.com/files/2017/04/photo_201704_17_STARBOY-2017-01.jpg"/>
            </article>
                      <article class="gallery-photo">
              <img src="https://www.theweeknd.com/files/2017/04/photo_201704_17_STARBOY-2017-02.jpg"/>
            </article>
                      <article class="gallery-photo">
              <img src="https://www.theweeknd.com/files/2017/04/photo_201704_17_18710016.jpg"/>
            </article>
                      <article class="gallery-photo">
              <img src="https://www.theweeknd.com/files/2017/04/photo_201704_17_18720011.jpg"/>
            </article>
                      <article class="gallery-photo">
              <img src="https://www.theweeknd.com/files/2017/04/photo_201704_17_523874-R1-00-37.jpg"/>
            </article>
                      <article class="gallery-photo">
              <img src="https://www.theweeknd.com/files/2017/04/photo_201704_17_523874-R1-03-34.jpg"/>
            </article>
                      <article class="gallery-photo">
              <img src="https://www.theweeknd.com/files/2017/04/photo_201704_17_523541-R1-06-31_.jpg"/>
            </article>
                </div>
    </div>
  </section> */}
      </div>
    );
}

