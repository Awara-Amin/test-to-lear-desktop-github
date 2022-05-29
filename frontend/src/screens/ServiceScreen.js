import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
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

export default function HomeScreen(props) {
  const productId = props.match.params.id;
  const params = useParams();
  const { serviceId } = params;
  console.log("bra");
  console.log(productId);
  console.log("bra");

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
      <Container fluid className="paddingRemove">
        <img
          className=" w-100 first-background-For-Contact"
          src="https://as2.ftcdn.net/v2/jpg/03/11/59/79/1000_F_311597945_LuOQuFfk5wGWP4r9eUMpSmBdYES58lsK.jpg"
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

      <Container fluid className="spaceForOurServeces">
        {data.services
          .filter((service) => service._id === productId)
          .map((item, index) => (
            <Row key={index}>
              {console.log("wwwwwwwwwwwwww")}
              {console.log(item.image)}

              <Col md={6}>
                <img
                  className="img-large"
                  src={"." + item.image}
                  alt={item.name}
                ></img>
              </Col>

              <Col md={6}>
                <ListGroup variant="flush" className="align-items-center">
                  <ListGroup.Item>
                    <Helmet>
                      <title>{item.name}</title>
                    </Helmet>
                    <h1>{item.name}</h1>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Rating
                      rating={item.rating}
                      numReviews={item.numReviews}
                    ></Rating>
                  </ListGroup.Item>

                  {/* <ListGroup.Item>Price : ${product.price}</ListGroup.Item> */}

                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <p>
                          We are an Erbil web design company delivering
                          stunning, functional websites and web-apps that
                          resonate with the people interacting with them – your
                          clients. Our websites and web-apps don't just look
                          good, they perform, they convert. If you are looking
                          to generate enquiries, increase sales or maximise
                          awareness we have the in-house web design and
                          development teams in place to achieve this. Suncode IT
                          Solutions and Consultancy is a dependable Erbil Web
                          Development partner in the area, Iraq who purposefully
                          tailors our services to meet the specific needs of
                          agencies. We know you want a trouble-free development
                          experience and a site that functions exactly as
                          designed. We provide reliable maintenance services
                          that release you from the burden of managing upgrades
                          and handling unplanned client support tasks. Our
                          agency clients handle the digital strategy, creative
                          design and overall project direction. We take care of
                          the development and ongoing support. Smart Solutions
                          can come to the table as your development team or work
                          invisibly to support your brand.
                        </p>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Description:
                    <p>{item.description}</p>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          ))}
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
    </>
  );
}
