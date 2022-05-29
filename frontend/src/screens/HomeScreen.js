import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import data from "../data";
import Product from "../components/Service";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { listTopSellers } from "../actions/userActions";
import { Link } from "react-router-dom";
import Topcarusel from "../components/Topcarusel";
import { listCategories } from "../actions/categoryActions";
import Category from "../components/Category";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet-async";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Rating from "../components/Rating";
import ScrollToTop from "../components/ScrollToTop";
import TextAnimationForContact from "../components/TextAnimationForContact";
import Service from "../components/Service";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

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

  useEffect(() => {
    // dispatch(listProducts());
    dispatch(listCategories({}));
    dispatch(listProducts({}));
    dispatch(listTopSellers());
  }, [dispatch]);

  console.log("categories at homeScreen");
  console.log(categories);

  return (
    <>
      <Topcarusel></Topcarusel>

      <Container fluid className="spaceForOurServeces">
        <Row>
          <Col className="d-flex justify-content-center">
            <strong>
              <h1>Our Services</h1>
            </strong>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="d-flex justify-content-center text-wrap font-weight-bold ">
              We are different. We deliver with outstanding professionalism,
              reliability, full return on investment accountability.
            </p>
          </Col>
        </Row>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {data.services.length === 0 && (
              <MessageBox>No Product found kaka</MessageBox>
            )}

            {data.services.map((service) => (
              <Col
                key={service._id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="mb-3"
              >
                <Service service={service}></Service>
              </Col>
            ))}
          </Row>
        )}
      </Container>

      {/* our works */}
      <section id="background">
        {/*                       we need this class for our work background */}
        <Container fluid className="containerOurWork">
          <Row>
            <Col className="d-flex justify-content-center">
              <strong>
                <h1>Our Amazing Works</h1>
              </strong>
            </Col>
          </Row>
          {/* <div className="titleOurAmazinWork">
          <h2 className="titleOurAmazinWork1">Our Amazing Works</h2>
        </div> */}

          {loadingCategory ? (
            <LoadingBox></LoadingBox>
          ) : errorCategory ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <Row>
              {categories.length === 0 && (
                <MessageBox>No Categories found kaka</MessageBox>
              )}

              {categories.map((category) => (
                <Col
                  key={category._id}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  className="mb-3"
                >
                  <Category category={category}></Category>
                </Col>
              ))}
            </Row>
          )}
        </Container>

        <Container className="d-flex justify-content-center align-center align-items-center spaceT">
          <Row>
            <Col sm={7} className="agency">
              <h1>Your Erbil Web Development Agency</h1>
              <p className="textJustify">
                We are a professional Erbil Web Development company delivering
                stunning, functional websites and web-apps that resonate with
                the people interacting with them – your clients.
              </p>
              <p className="textJustify">
                Our websites and web-apps don't just look good, they perform,
                they convert. If you are looking to generate enquiries, increase
                sales or maximise awareness we have the in-house web design and
                development teams in place to achieve this.
              </p>
            </Col>
            <Col
              sm={5}
              className="d-flex justify-content-center align-center align-items-center"
            >
              {/* <span className="contactsUs">Contact us</span> */}
              <TextAnimationForContact></TextAnimationForContact>
              <span>
                <a href="/contactscreen" className="item ">
                  <i className="fa fa-envelope coloredIcon-1"></i>
                </a>
              </span>
            </Col>
          </Row>
        </Container>
      </section>

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
