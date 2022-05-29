import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import CarouselSlider from "react-carousel-slider";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextAnimation from "./TextAnimation";
import data from "../data";
console.log("kaka lists here");
console.log(data);
console.log(data.homePage[0].backgroundImage);

export default function Topcarusel() {
  return (
    <Container fluid className="paddingRemove">
      <img
        className=" w-100 first-background"
        src={data.homePage[0].backgroundImage}
        alt="First slide"
      ></img>

      <Container className="glossyCodeName">
        <Row>
          <Col>
            <h1>
              {/* <span>Glossy</span> Code */}
              <TextAnimation></TextAnimation> Code
            </h1>
          </Col>
        </Row>
      </Container>

      <Container className="glossyCodeTexts">
        <Row>
          <Col className="w 40%">
            <h2>We Are Flexible Webdesiners</h2>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
