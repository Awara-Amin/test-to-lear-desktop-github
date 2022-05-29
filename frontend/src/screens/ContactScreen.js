import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import Product from "../components/Service";
// import LoadingBox from "../components/LoadingBox";
// import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { listTopSellers } from "../actions/userActions";
// import { Link } from "react-router-dom";

// import Topcarusel from "../components/Topcarusel";
import { listCategories } from "../actions/categoryActions";
// import Category from "../components/Category";
// import data from "../data"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet-async";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Mailer from "../components/Mailer";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import ScrollToTop from "../components/ScrollToTop";
import data from "../data";

export default function ContactScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  // const { loading, error, products } = productList;

  const categoryList = useSelector((state) => state.categoryList);
  const {
    loading: loadingCategory,
    error: errorCategory,
    categories,
  } = categoryList;

  const userTopSellersList = useSelector((state) => state.userTopSellersList);
  const {
    loading: loadingSellers,
    error: errorSellers,
    users: sellers,
  } = userTopSellersList;

  // useEffect(() => {
  //   // dispatch(listProducts());
  //   dispatch(listCategories({}));
  //   dispatch(listProducts({}));
  //   dispatch(listTopSellers());
  // }, [dispatch]);

  console.log("categories at homeScreen");
  console.log(categories);
  console.log(data);

  return (
    <>
      <Helmet>
        <title>Glossy Code</title>
      </Helmet>
      <Container fluid className="paddingRemove">
        <img
          className=" w-100 first-background-For-Contact"
          src={data.talkToUsPage[0].backgroundImage}
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
      {/*    the message part */}
      <section id="background">
        <Container className="d-flex justify-content-center align-center align-items-center spaceT">
          <Row>
            <Col sm={8}>
              <Mailer></Mailer>
            </Col>
            <Col
              sm={4}
              className="d-flex justify-content-center align-center align-items-center agency "
            >
              <h2>
                Contact us 24/7, our service department reply you right back
              </h2>
            </Col>
          </Row>
        </Container>
      </section>

      {/*  */}
      <div className="box-second">
        <>
          <div>
            <div>
              <h1 className="colorPart2">WEBSITE DESIGN AGENCY IN ERBIL</h1>
            </div>
            <div>
              <h7>We are specialist at:</h7>
            </div>
            <div>
              <ul>
                <li>
                  <i class="fa fa-star colorPart2Stars"></i>Website Design and
                  Development
                </li>
                <li>
                  <i class="fa fa-star colorPart2Stars"></i>Website Design and
                  Development
                </li>
                <li>
                  <i class="fa fa-star colorPart2Stars"></i>Website Design and
                  Development
                </li>
                <li>
                  <i class="fa fa-star colorPart2Stars"></i>Website Design and
                  Development
                </li>
                <li>
                  <i class="fa fa-star colorPart2Stars"></i>Website Design and
                  Development
                </li>
              </ul>
            </div>
          </div>
        </>
      </div>

      {/*  */}

      <Container fluid className="paddingRemove">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.553046130268!2d44.018601115259735!3d36.15309448008689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400724a92e583837%3A0x791a5405f8679d0c!2sSalahaddin%20University%20-%20College%20of%20Science!5e0!3m2!1sen!2siq!4v1652640413635!5m2!1sen!2siq"
          style={{
            width: "100vw",
            height: "50vh",
            style: "border:0;",
            allowfullscreen: "",
            loading: "lazy",
            referrerpolicy: "no-referrer-when-downgrade",
          }}
        ></iframe>
      </Container>

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

      {/* <div className="wholeContactPage"> */}
      {/* <div className="contactMesageSecondPart"> */}
      {/* <div>
            <Mailer></Mailer>
          </div> */}
      {/* <div className="rightPart">
            <h2>
              Contact us 24/7, our service department reply you right back
            </h2>
            <p className="animationP">
              The Caterpillar and Alice looked at each other for some time in
              silence: at last the Caterpillar took the hookah out of its mouth,
              and addressed her in a languid, sleepy voice.
            </p>
            <div className="box-second">
              <div>
                <h1>Follow us on</h1>
              </div>
              <div className="list-tags">
                <ListGroup className="list-tags">
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <a href="/contactscreen" className="item">
                          Facebook
                        </a>
                      </Col>
                      <Col>
                        <i className="fa fa-facebook-f coloredIcon"></i>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <a href="/websites/colorful/" class="item">
                          Instagram
                        </a>
                      </Col>
                      <Col>
                        <i
                          className="fa fa-instagram coloredIcon"
                          aria-hidden="true"
                        ></i>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <a href="/websites/colorful/" className="item">
                          Twitar
                        </a>
                      </Col>
                      <Col>
                        <i
                          className="fa fa-twitter coloredIcon"
                          aria-hidden="true"
                        ></i>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <a href="/websites/colorful/" className="item">
                          LinkedIn
                        </a>
                      </Col>
                      <Col>
                        <i
                          className="fa fa-linkedin coloredIcon"
                          aria-hidden="true"
                        ></i>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </div> */}
      {/* </div> */}

      {/* <div className="box-second">
        <>
          <div>
            <div>
              <h1 className="colorPart2">WEBSITE DESIGN AGENCY IN ERBIL</h1>
            </div>
            <div>
              <h7>We are specialist at:</h7>
            </div>
            <div>
              <ul>
                <li>
                  <i class="fa fa-star colorPart2Stars"></i>Website Design and
                  Development
                </li>
                <li>
                  <i class="fa fa-star colorPart2Stars"></i>Website Design and
                  Development
                </li>
                <li>
                  <i class="fa fa-star colorPart2Stars"></i>Website Design and
                  Development
                </li>
                <li>
                  <i class="fa fa-star colorPart2Stars"></i>Website Design and
                  Development
                </li>
                <li>
                  <i class="fa fa-star colorPart2Stars"></i>Website Design and
                  Development
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div>
              <h1 className="colorPart2">Your Erbil Web Development Agency</h1>
            </div>
            <div>
              <p className="textJustify">
                We are a professional Erbil Web Development company delivering
                stunning, functional websites and web-apps that resonate with
                the people interacting with them – your clients.
              </p>
            </div>
            <div>
              <p className="textJustify">
                Our websites and web-apps don't just look good, they perform,
                they convert. If you are looking to generate enquiries, increase
                sales or maximise awareness we have the in-house web design and
                development teams in place to achieve this.
              </p>
            </div>

            <div>
              <p className="textJustify">
                Our websites and web-apps don't just look good, they perform,
                they convert. If you are looking to generate enquiries, increase
                sales or maximise awareness we have the in-house web design and
                development teams in place to achieve this. Our websites and
                web-apps don't just look good, they perform, they convert. If
                you are looking to generate enquiries, increase sales or
                maximise awareness we have the in-house web design and
                development teams in place to achieve this.
              </p>
            </div>
          </div>
        </>
      </div>

      <div className="smartCode1-ContactPage">
        <div>
          <div className="smartCode2">
            <span className="one">Glossy </span>
            <span className="two">Code</span>
          </div>
          <div>
            <p>
              We are an IT Solutions and Consultancy company based in Erbil, we
              provide a high quality web development, designing and IT
              consulting services. We totally fathom the customer requirements
              and assist them to accomplish their ultimate business objectives.
            </p>
          </div>
          <div></div>
        </div>
        <div>
          <div>
            <img
              src="../../public/images/smartCode.png"
              alt="smartCod-Log"
            ></img>
          </div>
        </div>

        <div className="lastPartContact">
          <div>
            <h1>Contact Info</h1>
          </div>
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
        </div>
      </div> */}

      {/* <div className="box-second">
        <div>
          <h1>Follow us on</h1>
        </div>
        <div className="list-tags">
          <ListGroup className="list-tags">
            <ListGroup.Item>
              <Row>
                <Col>
                  <a href="/contactscreen" className="item">
                    Facebook
                  </a>
                </Col>
                <Col>
                  <i className="fa fa-facebook-f coloredIcon"></i>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  <a href="/websites/colorful/" class="item">
                    Instagram
                  </a>
                </Col>
                <Col>
                  <i
                    className="fa fa-instagram coloredIcon"
                    aria-hidden="true"
                  ></i>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  <a href="/websites/colorful/" className="item">
                    Twitar
                  </a>
                </Col>
                <Col>
                  <i
                    className="fa fa-twitter coloredIcon"
                    aria-hidden="true"
                  ></i>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>
                  <a href="/websites/colorful/" className="item">
                    LinkedIn
                  </a>
                </Col>
                <Col>
                  <i
                    className="fa fa-linkedin coloredIcon"
                    aria-hidden="true"
                  ></i>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div> */}
      {/* </div> */}
    </>
  );
}
