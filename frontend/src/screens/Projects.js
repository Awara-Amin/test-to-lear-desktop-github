import React, { useState } from "react";
import spinner from "../images/spinner.gif";
import SingleCard from "../components/SingleCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ScrollToTop from "../components/ScrollToTop";

import OtherSkills from "../components/OtherSkills";
import { initialProjects } from "../utils/initialProjects";
import data from "../data";
export default function Projects() {
  const [mydata, setdata] = useState(initialProjects);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Container fluid className="paddingRemove">
        <img
          className=" w-100 first-background-For-Project"
          src={data.projectPage[0].backgroundImage}
          alt="First slide"
        ></img>

        <Container className="glossyCodeName">
          <Row>
            <Col>
              <h1>Glossy Code</h1>
            </Col>
          </Row>
        </Container>

        <Container className="glossyCodeTexts-Contact">
          <Row>
            <Col className="w 40%">
              <h2>Contact Us</h2>
            </Col>
          </Row>
        </Container>
      </Container>

      <div className="md:text-xl  bg-gradient-to-b from-green-500 to-green-100 p-2 text-blue-700 font-bold text-center  rounded-b-full">
        {/* <!-- this section is about me --> */}
        <p className="md:text-3xl ">
          <i className="fa fa-project-diagram text-gray-700 px-2"></i>
          All Projects
        </p>

        <hr className="w-48 m-auto" />
        <p className="md:text-lg  text-center text-gray-700 pt-2">
          <i className="fa fa-angle-double-left"></i> Other Projects{" "}
          <i className="fa fa-angle-double-right"></i>
        </p>
      </div>
      <OtherSkills />

      <Row className="flex flex-wrap justify-content-center bg-color-gray">
        {loading ? (
          <div>
            <img src={spinner} alt="" />
          </div>
        ) : (
          mydata.oldProjects.map((project) => {
            return <SingleCard data={project} key={project.projectName} />;
          })
        )}
      </Row>
      <Container fluid className="colorback">
        <div>
          <h1>Contact Info</h1>
        </div>
        <Row>
          <Col xs={12} md={8}>
            <div>
              <ul>
                <li>
                  <i class="fa fa-location-arrow colorInfo"></i>
                  No 144, Dar u Asn (Hadid u Khashab) Ave. Shoresh, Erbil, Iraqi
                  Kurdistan
                </li>

                <li>
                  <i class="fa fa-phone colorInfo"></i>+964 750 555 1 999
                </li>
                <li>
                  <i class="fa fa-envelope colorInfo"></i>nfo@suncode.co
                </li>
                <li>
                  <i class="fa fa-envelope colorInfo"></i>www.suncode.co
                </li>
              </ul>
            </div>
          </Col>

          <Col xs={6} md={4}>
            <Row>
              <Col>
                <h1>Follow us on</h1>
              </Col>
            </Row>

            <Row>
              <Col>
                <a href="/contactscreen" className="item ">
                  <i className="fa fa-facebook-f coloredIcon"></i>
                </a>
                Facebook
              </Col>
            </Row>

            <Row>
              <Col>
                <a href="/aboutusscreen" class="item">
                  <i
                    className="fa fa-instagram coloredIcon"
                    aria-hidden="true"
                  ></i>
                </a>
                Instagram
              </Col>
            </Row>

            <Row>
              <Col>
                <a href="/websites/colorful/" className="item">
                  <i className="fa fa-twitter coloredIcon" aria-hidden="true">
                    {" "}
                  </i>
                </a>
                <span>Twitar</span>
              </Col>
            </Row>

            <Row>
              <Col>
                <a href="/websites/colorful/" className="item">
                  <i
                    className="fa fa-linkedin coloredIcon"
                    aria-hidden="true"
                  ></i>
                </a>
                LinkedIn
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <ScrollToTop></ScrollToTop>
    </>
  );
}
